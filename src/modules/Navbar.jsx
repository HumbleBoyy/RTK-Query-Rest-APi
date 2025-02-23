import React from 'react';
import {
  DollarOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../hooks/usePath';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='p-3 flex justify-between items-center w-full bg-slate-800'>
      <h2 className='text-white text-[30px] font-bold'><DollarOutlined />BuyCar</h2>
        <Button onClick={()=> navigate(`${PATH.addCar}`)} size='large' type='primary'><PlusCircleFilled/>Add</Button>
    </div>
  );
};
export default Navbar;