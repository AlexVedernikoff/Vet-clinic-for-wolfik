import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProcedureResponse } from '../../types/PetsDTO/procedure';

export const dewormingApi = createApi({
  reducerPath: 'dewormingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/',
  }),
  endpoints: (build) => ({
    getDewormingPet: build.query<ProcedureResponse, number>({
      query: (Id: number) => `api/client/procedure/deworming?petId=${Id}`,
    }),
    addNewDeworming: build.mutation<any, number>({
      query: (Id: number) => ({
        url: `api/client/procedure/deworming?petId=${Id}`,
        method: 'post',
        body: Id,
      }),
    }),
    updateDeworming: build.mutation<any, number>({
      query: (Id: number) => ({
        url: `api/client/procedure/deworming/${Id}`,
        method: 'put',
        body: Id,
      }),
    }),
    deleteDeworming: build.mutation<any, number>({
      query: (Id: number) => ({
        url: `api/client/procedure/deworming/${Id}`,
        method: 'delete',
        body: Id,
      }),
    }),
    getDeworming: build.query<ProcedureResponse, number>({
      query: (Id: number) => `api/client/procedure/deworming/${Id}`,
    }),
  }),
});

export const {
  useGetDewormingPetQuery,
  useAddNewDewormingMutation,
  useUpdateDewormingMutation,
  useDeleteDewormingMutation,
  useGetDewormingQuery,
} = dewormingApi;
