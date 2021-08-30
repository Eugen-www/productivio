const axios = require('axios').default;

class authAPI {
  registration = async (data) => {
    try {
      const response = await axios.post('auth/registration', data);
      console.log(`Success: ${response.data.message}`);
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

// TODO: FORM VALIDATION and CLEAR
// TODO: REDIRECT AFTER LOGIN on text page
// TODO: INPUT COMPONENT
// TODO: VALIDATION FORM AND DATA
// TODO: Make difficult auth eith refresh token (session, cookies)
