import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useAddCarsMutation } from '../store/carsApi'
import { useNavigate } from 'react-router-dom'

const AddCrud = () => {
const [carName, setCarName] = useState(null)
const [image, setImage] = useState(null)
const [price, setPrice] = useState(null)
const [madeIn, setMadeIn] = useState(null)
const [year, setYear] = useState(null)
const [passangers, setPassangers] = useState(null)
const navigate = useNavigate()
const [saveList] = useAddCarsMutation()

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        carName,
        price,
        image,
        madeIn,
        year,
        passangers
    };

    try {
        await saveList(data).unwrap();
        navigate("/"); 
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
};
  return (
    <div className='w-full flex flex-col justify-center h-[100vh] overflow-hidden bg-slate-300'>
      <h2 className='block mx-auto text-4xl font-bold mb-5'>Add New Car To Store</h2>
      <form onSubmit={handleSubmit} className='!w-[500px] flex flex-col gap-3 mx-auto'>
         <Input required allowClear value={carName} onChange={(e)=> setCarName(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Car Name'/>
         <Input required allowClear value={image} onChange={(e)=> setImage(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Picture URL'/>
         <Input required allowClear value={price} onChange={(e)=> setPrice(e.target.value)} type='number' className='!w-full !text-xl font-semibold' size='large' placeholder='Price'/>
         <Input required allowClear value={madeIn} onChange={(e)=> setMadeIn(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Made In'/>
         <Input required allowClear value={passangers} onChange={(e)=> setPassangers(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Passanger Capacity'/>
         <Input required allowClear value={year} onChange={(e)=> setYear(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Released year'/>
         <div className='w-full flex items-center gap-2'>
          <Button size='large' type='primary' onClick={()=> navigate(-1)} className='!text-xl !w-full !bg-red-600'>Cancel</Button>
          <Button size='large' type='primary' htmlType='submit' className='!text-xl !w-full'>Add</Button>
         </div>
      </form>
    </div>
  )
}

export default AddCrud
