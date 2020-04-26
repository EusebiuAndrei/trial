import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
	return (
		<div className="App">
			<Profile></Profile>
			<Register></Register>
		</div>
	);
}

export default App;
