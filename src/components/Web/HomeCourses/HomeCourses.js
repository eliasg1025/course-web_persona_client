import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';

import reactJsHooks from '../../../assets/img/jpg/courses/react-js-hooks.jpg';
import javascriptEs6 from '../../../assets/img/jpg/courses/javascript-es6.jpg';
import cssGrid from '../../../assets/img/jpg/courses/css-grid.jpg';
import prestashop17 from '../../../assets/img/jpg/courses/prestashop-1-7.jpg';
import reactNative from '../../../assets/img/jpg/courses/react-native.jpg';
import wordpress from '../../../assets/img/jpg/courses/wordpress.jpg';

import './HomeCourses.scss';

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourse
                            image={reactJsHooks}
                            title="React.js Hooks"
                            subtitle="Intermedio - React/Javascript"
                            link="https://www.udemy.com/course/react-js-de-cero-a-experto-creado-aplicaciones-reales/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={javascriptEs6}
                            title="Javascript ES6"
                            subtitle="Basico - Javascript"
                            link="https://www.udemy.com/course/react-js-de-cero-a-experto-creado-aplicaciones-reales/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={reactNative}
                            title="React Native Expo"
                            subtitle="Intermedio - React Native"
                            link="https://www.udemy.com/course/react-js-de-cero-a-experto-creado-aplicaciones-reales/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={cssGrid}
                            title="CSS Grid"
                            subtitle="Intermedio - CSS"
                            link="https://www.udemy.com/course/react-js-de-cero-a-experto-creado-aplicaciones-reales/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={prestashop17}
                            title="Prestashop 1.7"
                            subtitle="Basico - Prestashop"
                            link="https://www.udemy.com/course/react-js-de-cero-a-experto-creado-aplicaciones-reales/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={wordpress}
                            title="Wordpress"
                            subtitle="Basico - Wordpress"
                            link="https://www.udemy.com/course/react-js-de-cero-a-experto-creado-aplicaciones-reales/"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
            <Col lg={24} className="home-courses__more">
                <Link to="/courses">
                    <Button>Ver más</Button>
                </Link>
            </Col>
        </Row>
    );
}

/* Other Components */
function CardCourse(props) {
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title} />}
                actions={[
                    <Button>INGRESAR</Button>
                ]}   
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    );
}