import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginUser } from '../../types/AuthDTO';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/',
  }),
  endpoints: (build) => ({
    loginUser: build.mutation<any, LoginUser>({
      query: (data: LoginUser) => ({
        url: 'api/auth',
        method: 'post',
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
