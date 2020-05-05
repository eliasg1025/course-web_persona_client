import React, { useState, useEffect } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { KeyOutlined, GifOutlined, DollarCircleOutlined, LinkOutlined } from '@ant-design/icons';

import { getAccessTokenApi } from '../../../../api/auth';

import './AddEditCourseForm.scss';

export default function AddEditCourseForm(props) {
    const { setIsVisibleModal, setReloadCourses, course } = props;
    const [courseData, setCourseData] = useState({});

    return (
        <div className="add-edit-course-form">
            <AddEditForm
                course={course}
            />
        </div>
    );
}

function AddEditForm(props) {
    const { course } = props;

    return (
        <Form className="form-add-edit" onSubmitCapture={() => console.log('Submit form ...')}>
            <Form.Item>
                <Input
                    prefix={<KeyOutlined />}
                    placeholder="ID del curso"
                    // value={}
                    // onChange={}
                    disabled={course ? true : false}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LinkOutlined />}
                    placeholder="Url del curso"
                    // value={}
                    // onChange={}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<GifOutlined />}
                    placeholder="Cupón de descuento"
                    // value={}
                    // onChange={}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<DollarCircleOutlined />}
                    placeholder="precio del curso"
                    // value={}
                    // onChange={}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    { course ? 'Actualizar curso' : 'Crear curso' }
                </Button>
            </Form.Item>
        </Form>
    );
}
