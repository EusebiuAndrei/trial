import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
const Menu = (props) => {
	return (
		<div>
			<Modal
				show={props.openMenu}
				onHide={props.handleOpenMenu}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add a course</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div className="menuForm">
						<Form>
							<Form.Group controlId="formGridCity">
								<Form.Label>Course Name</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group controlId="formGridCity">
								<Form.Label>Price</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group controlId="formGridState">
								<Form.Label>Category</Form.Label>
								<Form.Control
									as="select"
									value="Choose..."
								>
									<option>Pasta</option>
									<option>Pizza</option>
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="formGridState">
								<Form.Label>Allergenes</Form.Label>
								<Form.Control
									as="select"
									value="Choose..."
								>
									<option>Affordable</option>
									<option>Medium</option>
									<option>Expensive</option>
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlSelect2">
								<Form.Label>Ingredients</Form.Label>
								<Form.Control as="select" multiple>
									<option>Carrots</option>
									<option>Tomato</option>
									<option>Garlic</option>
									<option>Onion</option>
									<option>Potatoes</option>
									<option>Chicken breast</option>
									<option>Pork</option>
									<option>Cow</option>
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlSelect2">
								<Form.Label>Allergenes</Form.Label>
								<Form.Control as="select" multiple>
									<option>Gluten</option>
									<option>Milk</option>
									<option>Hazelnuts</option>
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Course photos</Form.Label>
								<Form.Control
									id="courseFile"
									type="file"
									multiple
									label="Course Photo"
								/>
							</Form.Group>
						</Form>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary">Close</Button>
					<Button variant="primary" type="submit">
						Add course
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Menu;
