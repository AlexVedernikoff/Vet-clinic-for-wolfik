import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Procedure, ProcedureResponse } from '../../types/PetsDTO/procedure';

export const dewormingApi = createApi({
  reducerPath: 'dewormingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/',
  }),
  tagTypes: ['Dewormings'],
  endpoints: (build) => ({
    getDewormingPet: build.query<ProcedureResponse, void>({
      query: () => 'api/client/procedure/deworming?petId={petId}',
    }),
    addNewDeworming: build.mutation({
      query: (data: Procedure) => ({
        url: 'api/client/procedure/deworming?petId={petId}',
        method: 'POST',
        body: { ...data },
        invalidatesTags: [{ type: 'Dewormings', id: 'LIST' }],
      }),
    }),
    updateDeworming: build.mutation({
      query: (data: Procedure) => ({
        url: 'api/client/procedure/deworming/{dewormingId}',
        method: 'PUT',
        body: { ...data },
        invalidatesTags: [{ type: 'Dewormings', id: 'LIST' }],
      }),
    }),
    deleteDeworming: build.mutation({
      query: () => ({
        url: 'api/client/procedure/deworming/{dewormingId}',
        method: 'DELETE',
        invalidatesTags: [{ type: 'Dewormings', id: 'LIST' }],
      }),
    }),
    getDeworming: build.query<ProcedureResponse, void>({
      query: () => 'api/client/procedure/deworming/{dewormingId}',
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
