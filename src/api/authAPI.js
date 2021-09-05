const axios = require('axios').default;

class authAPI {
  registration = async (data) => {
    const response = await axios
      .post('http://localhost:5000/auth/registration', data)
      .catch(function (error) {
        if (error.response) {
          return {
            data: error.response.data.message,
            status: error.response.status,
          };
        }
      });
    return response;
  };
  login = async (data) => {
    const response = await axios
      .post('http://localhost:5000/auth/login', data)
      .catch(function (error) {
        if (error.response) {
          return {
            error: error.response.data,
            status: error.response.status,
          };
        }
      });
    return response;
  };
}

module.exports = new authAPI();
