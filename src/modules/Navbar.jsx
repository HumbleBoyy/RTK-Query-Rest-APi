import React from 'react';
import {
  DollarOutlined,
} from '@ant-design/icons';

const Navbar = () => {

  return (
    <div className='p-3 flex justify-center w-full bg-blue-700'>
      <h2 className='text-white text-[30px] font-bold'><DollarOutlined />BuyCar</h2>
    </div>
  );
};
export default Navbar;