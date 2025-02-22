import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const carsApi = createApi({
  reducerPath: 'carsApi',
  tagTypes:["cars"],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
     getAllCars:builder.query({
       query:() => `/carsData`,
       providesTags: (result) =>
        result
          ? [...result.map(({ }) => ({ type: 'cars' })),{ type: 'cars' }]
          : [{ type: 'cars' }],
     }),
     addCars:builder.mutation({
      query:(data)=> ({
        url:"/carsData",
        method:"post",
        body:data
      }),
      invalidatesTags:['cars']
     })
  }),
})
export const { useGetAllCarsQuery, useAddCarsMutation } = carsApi