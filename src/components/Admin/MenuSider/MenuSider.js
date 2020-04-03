import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { HomeFilled, UserOutlined } from '@ant-design/icons';

import './MenuSider.scss';

function MenuSider(props) {
    const { menuCollapsed, location } = props;
    const { Sider } = Layout;

    console.log(location.pathname);

    return (
        <Sider className='menu-sider' collapsed={menuCollapsed}>
            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={[location.pathname]}
            >
                <Menu.Item key='/admin'>
                    <Link to={'/admin'}>
                        <HomeFilled />
                        <span className='nav-text'>Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key='/admin/users'>
                    <Link to={'/admin/users'}>
                        <UserOutlined />
                        <span className='nav-text'>Usuarios</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default withRouter(MenuSider);
