import axios from 'axios';

const authToken = `eyJhbGciOiJIUzUxMiJ9.
eyJzdWIiOiJjbGllbnQxQGVtYWlsLmNvbSIsImlhdCI6MTY2Mjk5MDkxNywiZXhwIjoxNjY0OTkwOTE3fQ.
i3ntbCy9kPlKIA6ICbkmNhNw-BbeB8i-WBIr6V_xZDau4VEIn6AYaRlHTTSaVTimcbiQkztKJJyr7-3Q_IGnIg`;

export const axiosInstance = axios.create({
  baseURL: 'http://91.241.64.154:8080/',
  headers: { Authorization: `${authToken}` },

});

axiosInstance.interceptors.request.use(async (req) => {
  console.log('interceptors run');

  return req;
});
