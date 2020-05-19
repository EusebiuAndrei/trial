import React from 'react';
import * as api from '../api';

class UploadMenuPhoto extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			idCourse: props.idCourse,
			file: null,
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();
		api.uploadMenuPhoto(this.state);
	}

	onChange(e) {
		this.setState({ file: e.target.files[0] });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<p>Upload a photo</p>
				<input
					type="file"
					name="myImage"
					onChange={this.onChange}
				/>
				<button type="submit" class="btn btn-outline-primary">
					Upload
				</button>
			</form>
		);
	}
}

export default UploadMenuPhoto;
