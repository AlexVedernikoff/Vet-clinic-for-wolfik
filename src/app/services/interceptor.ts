import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

// const authToken = `eyJhbGciOiJIUzUxMiJ9.
// eyJzdWIiOiJjbGllbnQxQGVtYWlsLmNvbSIsImlhdCI6MTY2Mjk5MDkxNywiZXhwIjoxNjY0OTkwOTE3fQ.
// i3ntbCy9kPlKIA6ICbkmNhNw-BbeB8i-WBIr6V_xZDau4VEIn6AYaRlHTTSaVTimcbiQkztKJJyr7-3Q_IGnIg`;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://91.241.64.154:8080/',

});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  const { headers } = config;
  if (headers) {
    headers.Authorization = `Bearer ${localStorage.getItem('AUTH_TOKEN')}`;
  }

  return config;
});
