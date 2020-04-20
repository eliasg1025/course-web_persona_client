import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './Newsletter.scss';

export default function Newsletter() {

	const onSubmit = () => {
		console.log('newsletter enviada');
	}

	return (
		<div className="newsletter">
			<h3>Newsletter</h3>
			<Form onSubmitCapture={onSubmit}>
				<Form.Item>
					<Input
						prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }}/>}
						placeholder="Correo electronico"
						// value=""
						// onChange={}
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Me suscribo
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
