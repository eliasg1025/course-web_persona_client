import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './MenuTop.scss';

export default function MenuTop(props) {
    return (
        <Menu className="menu-top" mode="horizontal">
            <Menu.Item className="menu-top__logo">Logo ...</Menu.Item>
            <Menu.Item className="menu-top__item">
                <Link to={'/'}>Home</Link>
            </Menu.Item>
            <Menu.Item className="menu-top__item">
                <Link to={'/contact'}>Contact</Link>
            </Menu.Item>
            <div>Social media</div>
        </Menu>
    );
}