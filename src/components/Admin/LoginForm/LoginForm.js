import React, { useState } from 'react';
import { Form, Input, Button, Spin, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signInApi } from '../../../api/user';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../utils/constants';

import './LoginForm.scss';

export default function LoginForm() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = async e => {
        e.preventDefault();
        setLoading(true);
        const result = await signInApi(inputs);

        if (!result.message) {
            const { accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);

            notification['success']({
                message: 'Login correcto'
            });

            window.location.href = '/admin';
        } else {
            notification['error']({
                message: result.message
            });
        }

        setLoading(false);
    };

    return (
        <Form
            className='login-form'
            onChange={changeForm}
            onSubmitCapture={login}
        >
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type='email'
                    name='email'
                    placeholder='Correo electronico'
                    className='login-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={
                        <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    className='login-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' className='login-form__button' disabled={loading}>
                    { loading ? <div><Spin /> Cargando</div>   :  'Entrar'}
                </Button>
            </Form.Item>
        </Form>
    );
}
