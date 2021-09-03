const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const auth = require('../routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200,
};

app.use([express.json(), cors(corsOptions)]);
app.use('/auth', [
  auth,
  createProxyMiddleware({
    target: `http://localhost:${PORT}`,
    changeOrigin: true,
  }),
]);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://qwerty:qwerty123@cluster0.hq1sg.mongodb.net/Productivio?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    );
    app.listen(PORT, () => {
      console.log(`Server is working on port ${PORT}... `);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
