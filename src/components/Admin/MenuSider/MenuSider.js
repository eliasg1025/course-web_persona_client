import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { HomeFilled, MenuOutlined } from '@ant-design/icons';

import './MenuSider.scss';

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className='menu-sider' collapsed={menuCollapsed}>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>
          <Link to={'/admin'}>
            <HomeFilled />
            <span className='nav-text'>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to={'/admin/menu'}>
            <MenuOutlined />
            <span className='nav-text'>Menu Web</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
