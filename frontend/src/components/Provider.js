import React from 'react';

import Menu from './Menu';
import Schedule from './Schedule';

const Provider = (data) => {
	return (
		<div>
			{/* date provider */}
			<Menu></Menu>
			<Schedule></Schedule>
		</div>
	);
};

export default Provider;
