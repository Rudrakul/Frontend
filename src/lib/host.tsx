import axios from "axios";

const baseURL = process.env.stage.API_BASE_URL;

const axiosInstance = axios.create({
  // baseURL, headers, etc.
});

// Interceptor for requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token, modify config, etc.
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor for responses
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
