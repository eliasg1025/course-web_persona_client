import React from 'react'
import { Row, Col, Card } from 'antd';
import { ClockCircleOutlined, KeyOutlined, MessageOutlined, UserOutlined, DollarOutlined, CheckCircleOutlined } from '@ant-design/icons'

import './HowMyCoursesWork.scss';

export default function HowMyCoursesWork() {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>¿Cómo funcionan mis cursos?</h2>
                <h3>
                    Cada curso cuenta con contenido bajo la web de Udemy, activa las 24 horas al día los 365 días al año
                </h3>
            </Col>

            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            title="Cursos y clases"
                            description="Cursos entre 10 y 30 horas, cada curso tiene una duración aproximada de 15 minutos"
                        >
                            <ClockCircleOutlined />
                        </CardInfo>
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            title="Acceso 24/7"
                            description="Cursos entre 10 y 30 horas, cada curso tiene una duración aproximada de 15 minutos"
                        >
                            <KeyOutlined />
                        </CardInfo>
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            title="Aprendizaje colaborativo"
                            description="Cursos entre 10 y 30 horas, cada curso tiene una duración aproximada de 15 minutos"
                        >
                            <MessageOutlined />
                        </CardInfo>
                    </Col>
                </Row>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            title="Mejora tu perfil"
                            description="Cursos entre 10 y 30 horas, cada curso tiene una duración aproximada de 15 minutos"
                        >
                            <UserOutlined />
                        </CardInfo>
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            title="Precios bajos"
                            description="Cursos entre 10 y 30 horas, cada curso tiene una duración aproximada de 15 minutos"
                        >
                            <DollarOutlined />
                        </CardInfo>
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            title="Certificados de finalización"
                            description="Cursos entre 10 y 30 horas, cada curso tiene una duración aproximada de 15 minutos"
                        >
                            <CheckCircleOutlined />
                        </CardInfo>
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}

function CardInfo(props) {
    const { title, description } = props;
    const { Meta } = Card;

    return (
        <Card className="how-my-courses-work__card">
            { props.children }
            <Meta title={title} description={description} />
        </Card>
    )
}