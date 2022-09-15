/* eslint-disable consistent-return */
import { LoginUser, NewUser } from '../../types/AuthDTO';
import { axiosInstance } from './interceptor';

export class AuthService {
  static createNewUser = async (data: NewUser) => {
    try {
      const { email, firstname, lastname, password, confirmPassword } = data;
      const response = await axiosInstance.post(
        'api/registration',
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

  static loginUser = async (data: LoginUser) => {
    try {
      const { username, password } = data;
      const response = await axiosInstance.post(
        'api/auth',
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

  static getCurrentClient = async () => {
    try {
      const res = await axiosInstance.get(
        'api/auth/getCurrent',
      );
  
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
}
