import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

const formWidth = {
	width: '60%',
	margin: 'auto',
};

class Register extends Component {
	render() {
		return (
			<div style={formWidth}>
				<Form>
					<h2>Register Form</h2>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone
							else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
						/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							label="Check me out"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Register
					</Button>
				</Form>
			</div>
		);
	}
}

export default Register;
