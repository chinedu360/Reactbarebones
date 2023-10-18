import axios from "axios";
import config from "../config/config";

// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL: config.apiUrl,
};

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);

// Main api function
const api = (axios) => {
  return {
    get: (url, config = {}) => axios.get(url, config),
    delete: (url, config = {}) => axios.delete(url, config),
    post: (url, body, config = {}) => axios.post(url, body, config),
    patch: (url, body, config = {}) => axios.patch(url, body, config),
    put: (url, body, config = {}) => axios.put(url, body, config),
  };
};

// Export the default API instance
export default api(axiosInstance);
