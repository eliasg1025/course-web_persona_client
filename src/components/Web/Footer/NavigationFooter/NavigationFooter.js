import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';
import { BookOutlined, CodeOutlined, DatabaseOutlined, RightOutlined, HddOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';

import './NavigationFooter.scss';

export default function NavigationFooter() {
    return (
        <Row className="navigation-footer">
            <Col md={24}>
                <h3>Navegacion</h3>
            </Col>
            <Col md={12}>
                <RenderListLeft />
            </Col>
            <Col md={12}>
                <RenderRightLeft />
            </Col>
        </Row>
    );
}

function RenderListLeft() {
    return (
        <ul>
            <li>
                <a href="#">
                    <BookOutlined /> Cursos Online
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <CodeOutlined /> Desarrollo web
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <DatabaseOutlined /> Base de datos
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <RightOutlined /> Politica de privacidad
                </Link>
            </li>
        </ul>
    );
}

function RenderRightLeft() {
    return (
        <ul>
            <li>
                <a href="#">
                    <HddOutlined /> Sistemas / Servidores
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <AppstoreOutlined /> CMS
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <UserOutlined /> Portfolio
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <RightOutlined /> Politica de cookies
                </Link>
            </li>
        </ul>
    );
}