import React from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import EliasLogo from '../../../assets/img/png/original.png';

import './MenuTop.scss';

export default function MenuTop() {
  return (
    <div className='menu-top'>
      <div className='menu-top__left'>
        <img
          className='menu-top__left-logo'
          src={EliasLogo}
          alt='Elias Guere'
        />
        <Button type='link' onClick={() => console.log('Click.')}>
          <MenuFoldOutlined />
        </Button>
      </div>
      <div className='menu-top__right'>
        <Button type='link' onClick={() => console.log('Desconexion.')}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
