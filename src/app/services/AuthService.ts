import axios from 'axios';

export interface NewUser {
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string
}

export interface LoginUser {
  username: string,
  password: string
}

class AuthService {
  baseUrl = 'http://91.241.64.154:8080/';

  async createNewUser (data: NewUser) {
    try {
      const {
        email, firstname, lastname, password, confirmPassword,
      } = data;
      const response = await axios.post(
        `${this.baseUrl}api/registration`,
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
  }

  async loginUser (data: LoginUser) {
    try {
      const {
        username, password,
      } = data;
      const response = await axios.post(
        `${this.baseUrl}api/auth`,
        {
          username,
          password,
        },
        { headers: { 'Content-type': 'application/json' } },
      );

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default AuthService;
