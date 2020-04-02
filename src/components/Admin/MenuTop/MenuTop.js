import React from 'react';
import { Button } from 'antd';
import {
    MenuFoldOutlined,
    PoweroffOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import EliasLogo from '../../../assets/img/png/original.png';
import { logout } from '../../../api/auth';

import './MenuTop.scss';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;

    const logoutUser = () => {
        logout();
        window.location.reload();
    };

    return (
        <div className='menu-top'>
            <div className='menu-top__left'>
                <img
                    className='menu-top__left-logo'
                    src={EliasLogo}
                    alt='Elias Guere'
                />
                <Button
                    type='link'
                    onClick={() => setMenuCollapsed(!menuCollapsed)}
                >
                    {menuCollapsed ? (
                        <MenuFoldOutlined />
                    ) : (
                        <MenuUnfoldOutlined />
                    )}
                </Button>
            </div>
            <div className='menu-top__right'>
                <Button type='link' onClick={logoutUser}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}
