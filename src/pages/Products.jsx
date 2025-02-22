import React from 'react'
import ProductCard from '../components/ProductCard'
import { useGetAllCarsQuery } from '../store/carsApi'

const Products = () => {
    const {data = []} = useGetAllCarsQuery()
    console.log(data)
  return (
    <div className='flex flex-wrap items-center gap-2 mt-5  justify-start px-2'>
      {data.map(item => <ProductCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Products
