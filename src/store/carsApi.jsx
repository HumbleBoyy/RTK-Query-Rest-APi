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
     }),
     editCars:builder.mutation({
      query:(data)=> ({
        url:`/carsData/${data.id}`,
        method:"PUT",
        body:data
      }),
      invalidatesTags:['cars']
     }),
     deleteCar:builder.mutation({
      query:(id)=> ({
        url:`/carsData/${id}`,
        method:"delete",
      }),
      invalidatesTags:['cars']
     }),
     singlePageData:builder.query({
      query:(id) => ({
        url:`/carsData/${id}`,
      })
     })
  }),
})
export const { useGetAllCarsQuery, useAddCarsMutation, useDeleteCarMutation, useEditCarsMutation, useSinglePageDataQuery} = carsApi