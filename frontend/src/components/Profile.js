import React, { Component } from 'react';

import User from './User';
import Client from './Client';
import Provider from './Provider';

class Profile extends Component {
	state = {
		email: '',
		name: '',
		role: '',
		token: '',
		details: {
			preferences: ['f', 'd'],
			location: {
				latitude: 0,
				longitude: 0,
			},
			avatar: 'fds.jpg',
		},
	};

	render() {
		return (
			<div>
				<User />
				{this.state.role === 'Client' ? (
					<Client data={this.state.details}></Client>
				) : (
					<Provider data={this.state.details}></Provider>
				)}
			</div>
		);
	}
}

export default Profile;
