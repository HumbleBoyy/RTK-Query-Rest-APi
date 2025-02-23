import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteCarMutation, useGetAllCarsQuery } from '../store/carsApi'
import { Button, Card, Modal } from 'antd'
import { ArrowLeftOutlined, DeleteFilled, ShoppingCartOutlined, SignatureFilled } from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';
const SinglePage = () => {

    const {id} = useParams()
    const {data = []} = useGetAllCarsQuery()
    const newData = data.find(item => item.id === id)
    const navigate = useNavigate()
    const [openDelete, setOpenDelete] = useState(false)
    const [deleteItem] = useDeleteCarMutation()
    const [deleteId, setDeleteId] = useState(null)

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
                <Button className='!w-full !text-[20px] flex items-center !bg-blue-500' size='large' type='primary'><SignatureFilled /></Button>
              </div>
            </div>
          </Card>
        </div>

        <Modal title={"Delete"} open={openDelete} onCancel={()=> setOpenDelete(false)} onOk={handleDelete} onClose={()=> setOpenDelete(false)}>
            <p className='text-[18px] font-semibold'>Do you want to delete <span className='text-blue-600'>{newData?.carName}</span>?</p>
        </Modal>
     </>
  )
}

export default SinglePage
