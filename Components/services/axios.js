import Axios from 'axios';


const api = Axios.create({
  baseURL: 'https://gorest.co.in/public/v2/users',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    accept: 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    let token = null;
    try {
      token = 'd4b15cf0f46220dbac66e322644cc7264095cc2f9a465bcc83ec0607c5b4820b';
    } catch (err) {
      if (err instanceof ReferenceError) {
        // use React Native AsyncStorage
        token = 'd4b15cf0f46220dbac66e322644cc7264095cc2f9a465bcc83ec0607c5b4820b';
      } else {
        throw err;
      }
    }

    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
