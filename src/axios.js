import axios from 'axios';

const instance = axios.create({
  baseURL: "http://test-calender-server.onrender.com/",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;