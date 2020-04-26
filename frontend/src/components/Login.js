import React from 'react';
import { Form, Button } from 'react-bootstrap';

const formWidth = {
	width: '60%',
	margin: 'auto',
};

const Login = () => {
	return (
		<div style={formWidth}>
			<Form>
				<h2>Login Form</h2>
				<Form.Group controlId="formBasicUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter username"
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Log in
				</Button>
			</Form>
		</div>
	);
};

export default Login;
