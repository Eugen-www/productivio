const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');
const User = require('../models/User');

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, secret, { expiresIn: '15m' });
};

class authController {
  async registration(req, res) {
    try {
      const { name, username, password, email } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        res.status(400).json({ message: `There is a user with username ${username}` });
      }
      const hashPassword = bcrypt.hashSync(password, 8);
      const user = new User({ name, username, password: hashPassword, email });
      await user.save();
      return res.status(200).json({ message: 'User was successfully registered' });
    } catch (e) {
      console.log(e);
      return res.status(200).json({ message: 'Registration failed' });
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: `There is not a user with username ${username}` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.status(400).json({ message: `Invalid password` });
      }
      const token = generateAccessToken(user._id);
      res
        .status(200)
        .set({ Authorization: `Bearer ${token}` })
        .json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }
}

module.exports = new authController();
