import React from 'react';
import { Button, Card } from 'antd';
const { Meta } = Card;
const ProductCard = ({item}) => (
  <Card
    hoverable
    style={{
      width: 340,
    }}
    cover={<img alt={item.carName} src={item.image} className='object-cover w-[350px] h-[200px]'/>}
  >
    <h1 className='text-[25px] font-bold'>{item.carName}</h1>
    <div className='flex flex-col gap-2'>
       <h2 className='text-[20px]  font-semibold'>Price: <span className='text-green-600'>{item.price}$</span></h2>
       {/* <h3 className='text-[20px]  font-semibold'>Year: {item.year}</h3>
       <h3 className='text-[20px]  font-semibold'>Made in: {item.madeIn}</h3> */}
       <div className='flex gap-2'>
         <Button size='large' type='primary'>Buy</Button>
         <Button size='large' type='primary'>More</Button>
       </div>
    </div>
  </Card>
);
export default ProductCard;