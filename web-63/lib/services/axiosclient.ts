import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
  timeoutErrorMessage: "Server Timed out...",
  headers: {
    "Content-Type": "application/json"
  },
  // withCredentials: true
});

// interceptor 
axiosInstance.interceptors.request.use((config) => {
  // todo: Config update for authorization
  const token = Cookies.get("_at_63")
  if(token) {
    config.headers.Authorization = "Bearer "+token
  }
  return config;
})

// interceptor 
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (exception) => {
    throw exception.response ? 
      {error: exception.response.data, code: exception.status} : 
      {error: null, code: exception.status}
  }
)

export default axiosInstance