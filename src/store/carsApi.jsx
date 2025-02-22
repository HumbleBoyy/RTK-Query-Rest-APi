import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
     getAllCars:builder.query({
       query:() => `/carsData`,
     })
  }),
})
export const { useGetAllCarsQuery } = carsApi