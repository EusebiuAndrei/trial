import React, { Component } from 'react';

import User from './User';
import Client from './Client';
import Provider from './Provider';

class Profile extends Component {
	state = {
		email: '',
		name: '',
		role: 'Provider',
		token: '',
		details: {
			location: {
				latitude: '123',
				longitude: '-189',
				adress: 'Mihail Kogalniceanu',
			},
			CUI: '1242341353463563',
			type: 'Restaurant',
			description:
				'Un restaurant foarte frumos si foarte interesant as putea zice',
			images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
			rating: 5,
			priceCategory: 'Medium',
			specials: ['Pizza', 'Pasta', 'Fish', 'Parfais'],
			tables: '6',
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