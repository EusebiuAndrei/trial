import React from 'react';
import '../styles/login.css';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
	return (
		<div >
			
			<Form className="login-wraper">
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