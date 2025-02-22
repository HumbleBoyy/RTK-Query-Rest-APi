import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  DingtalkOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

const Navbar = () => {

  return (
    <div className='p-3 flex justify-center w-full bg-blue-700'>
      <h2 className='text-white text-[20px] font-bold'><DingtalkOutlined />Buy Car</h2>
    </div>
  );
};
export default Navbar;