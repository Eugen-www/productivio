const axios = require('axios').default;

class authAPI {
  registration = async (data) => {
    try {
      const response = await axios.post('auth/registration', data);
      return `Success: ${response.data.message}`;
    } catch (error) {
      console.log(error);
    }
  };
  login = async (data) => {
    try {
      const response = await axios.post('auth/login', data);
      console.log(`Success: ${response.data.token}`);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = new authAPI();


