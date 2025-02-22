import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetAllCarsQuery } from '../store/carsApi'
import { Button, Card } from 'antd'
import { ArrowLeftOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const SinglePage = () => {
    const {id} = useParams()
    const {data = []} = useGetAllCarsQuery()
    const newData = data.find(item => item.id === id)
    const naviagate = useNavigate()
  return (
<div className='flex justify-center items-center h-[90vh] px-2'>
   <Card
   className='flex items-center'
    hoverable
    style={{
      width: 1000,
    }}
    cover={<img alt={newData?.carName} src={newData?.image} className='object-contain !w-[1000px]  !rounded-bl-md !rounded-br-md'/>}
    >
    <h1 className='text-[25px] font-bold'>{newData?.carName}</h1>
    <div className='flex flex-col gap-6'>
       <h2 className='text-[20px]  font-semibold'>Price: <span className='text-green-600'>{newData?.price}$</span></h2>
       <h3 className='text-[20px]  font-semibold'>Year: {newData?.year}</h3>
       <h3 className='text-[20px]  font-semibold'>Passengers: {newData?.passangers}</h3>
       <h3 className='text-[20px]  font-semibold'>Made in: {newData?.madeIn}</h3>
       <div className='flex gap-2'>
       <Button onClick={()=> naviagate(-1)} className='w-full !text-[20px] flex items-center !bg-red-600' size='large' type='primary'><ArrowLeftOutlined />Cancel</Button>
         <Button className='!w-full !text-[20px] flex items-center !bg-green-500' size='large' type='primary'><ShoppingCartOutlined />Purchase</Button>
       </div>
    </div>
  </Card>
    </div>
  )
}

export default SinglePage
