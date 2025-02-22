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
        await saveList(data).unwrap(); // RTK Query mutation natijasini kutish
        navigate("/"); // Muvaffaqiyatli qo‘shilgandan keyin sahifani boshqa joyga yo‘naltirish
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
};
  return (
    <div className='w-full flex justify-center items-center h-[100vh]'>
      <form onSubmit={handleSubmit} className='!w-[500px] flex flex-col gap-5'>
         <Input value={carName} onChange={(e)=> setCarName(e.target.value)} className='!w-full flex flex-col' size='large' placeholder='Car Name'/>
         <Input value={image} onChange={(e)=> setImage(e.target.value)} className='!w-full flex flex-col' size='large' placeholder='Picture URL'/>
         <Input value={price} onChange={(e)=> setPrice(e.target.value)} type='number' className='!w-full flex flex-col' size='large' placeholder='Price'/>
         <Input value={madeIn} onChange={(e)=> setMadeIn(e.target.value)} className='!w-full flex flex-col' size='large' placeholder='Made In'/>
         <Input value={passangers} onChange={(e)=> setPassangers(e.target.value)} className='!w-full flex flex-col' size='large' placeholder='Passanger Capacity'/>
         <Input value={year} onChange={(e)=> setYear(e.target.value)} className='!w-full flex flex-col' size='large' placeholder='Released year'/>
         <Button size='large' type='primary' htmlType='submit'>Add</Button>
      </form>
    </div>
  )
}

export default AddCrud
