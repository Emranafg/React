import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/'
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Use template literals to correctly insert the token
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const { response } = error;
  if (response && response.status === 401) { // Check for unauthorized status
    localStorage.removeItem('ACCESS_TOKEN'); // Remove the token from localStorage
    // Handle the unauthorized error, such as redirecting to the login page or displaying an error message
  }
  return Promise.reject(error); // Reject the promise to propagate the error further
});

export default axiosClient;