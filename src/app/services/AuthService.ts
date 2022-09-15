/* eslint-disable consistent-return */
import axios from 'axios';
import { LoginUser, NewUser } from '../../types/AuthDTO';
import { axiosInstance } from './interceptor';

const baseUrl = 'http://91.241.64.154:8080/';

export const createNewUser = async (data: NewUser) => {
  try {
    const { email, firstname, lastname, password, confirmPassword } = data;
    const response = await axios.post(
      `${baseUrl}api/registration`,
      {
        email,
        firstname,
        lastname,
        password,
        confirmPassword,
      },
      { headers: { 'Content-type': 'application/json' } },
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (data: LoginUser) => {
  try {
    const { username, password } = data;
    const response = await axios.post(
      `${baseUrl}api/auth`,
      {
        username,
        password,
      },
      { headers: { 'Content-type': 'application/json' } },
    );

    const { jwtToken, role } = response.data;
    localStorage.setItem('AUTH_TOKEN', jwtToken);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentClient = async () => {
  try {
    const res = await axiosInstance.get(
      'api/auth/getCurrent',
    );

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
