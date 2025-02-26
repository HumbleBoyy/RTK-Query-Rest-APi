import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteCarMutation, useEditCarsMutation, useGetAllCarsQuery } from '../store/carsApi'
import { Button, Card, Input, Modal } from 'antd'
import { ArrowLeftOutlined, DeleteFilled, ShoppingCartOutlined, SignatureFilled } from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';
const SinglePage = () => {

    const {id} = useParams()
    const {data = []} = useGetAllCarsQuery()
    const newData = data.find(item => item.id === id)
    const navigate = useNavigate()
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)



    const [deleteItem] = useDeleteCarMutation()
    const [editItem] = useEditCarsMutation()
    const [deleteId, setDeleteId] = useState(null)
    const [editId, setEditId] = useState(null)

    const [carName, setCarName] = useState(null)
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState(null)
    const [madeIn, setMadeIn] = useState(null)
    const [year, setYear] = useState(null)
    const [passangers, setPassangers] = useState(null)


    // Delete Part
    const handleDeleteClick = (id) => {
        setDeleteId(id)
        setOpenDelete(true)
    }

    const handleDelete = () => {
      deleteItem(deleteId);
      setDeleteId(null)
      toast.success("Success!");

      setTimeout(() => {
          navigate("/"); 
          setOpenDelete(false); 
      }, 1500);
  };



/// Edit Part
  const handleEditClick = (id) => {
   const selectedItem = data.find(item => item.id === id)
   if(selectedItem){
      setEditId(id)
      setCarName(selectedItem.carName)
      setImage(selectedItem.image)
      setPrice(selectedItem.price)
      setMadeIn(selectedItem.madeIn)
      setYear(selectedItem.year)
      setPassangers(selectedItem.passangers)
      setOpenEdit(true)
   }
}

  const handleSubmit = (e) => {
     e.preventDefault()

     const updatedData = {
       id:editId,
       carName,
       image,
       price,
       madeIn,
       year,
       passangers
     }
      editItem(updatedData)
      toast.success("Success!")
     

    setTimeout(()=> {
      setOpenEdit(false)
    },1500)
   
   
  }
  return (
     <>
     <Toaster
      position="top-center"
      reverseOrder={false}
    />
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
                <Button className='!w-full !text-[20px] flex items-center !bg-green-500' size='large' type='primary'><ShoppingCartOutlined />Purchase</Button>
              <div className='flex gap-2'>
                <Button onClick={()=> navigate(-1)} className='w-full !text-[20px] flex items-center !bg-red-600' size='large' type='primary'><ArrowLeftOutlined />Cancel</Button>
                <Button onClick={()=> handleDeleteClick(id)} className='!w-full !text-[20px] flex items-center !bg-red-500' size='large' type='primary'><DeleteFilled /></Button>
                <Button onClick={()=> handleEditClick(id)} className='!w-full !text-[20px] flex items-center !bg-blue-500' size='large' type='primary'><SignatureFilled /></Button>
              </div>
            </div>
          </Card>
        </div>

        <Modal title={"Delete"} open={openDelete} onCancel={()=> setOpenDelete(false)} onOk={handleDelete} onClose={()=> setOpenDelete(false)}>
            <p className='text-[18px] font-semibold'>Do you want to delete <span className='text-blue-600'>{newData?.carName}</span>?</p>
        </Modal>

        <Modal title={"Edit"} open={openEdit} onCancel={()=> setOpenEdit(false)} onOk={handleSubmit} onClose={()=> setOpenEdit(false)}>
        <div className='w-[400px] flex flex-col gap-3 mx-auto'>
         <Input allowClear value={carName} onChange={(e)=> setCarName(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Car Name'/>
         <Input allowClear value={image} onChange={(e)=> setImage(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Picture URL'/>
         <Input allowClear value={price} onChange={(e)=> setPrice(e.target.value)} type='number' className='!w-full !text-xl font-semibold' size='large' placeholder='Price'/>
         <Input allowClear value={madeIn} onChange={(e)=> setMadeIn(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Made In'/>
         <Input allowClear value={passangers} onChange={(e)=> setPassangers(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Passanger Capacity'/>
         <Input allowClear value={year} onChange={(e)=> setYear(e.target.value)} className='!w-full !text-xl font-semibold' size='large' placeholder='Released year'/>
      </div>
        </Modal>
     </>
  )
}

export default SinglePage
