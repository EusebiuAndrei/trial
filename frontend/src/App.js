import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Authorization from './components/Authorization';

function App() {
	return (
		<div className="App">
			<Profile></Profile>
			<Authorization></Authorization>
		</div>
	);
}

export default App;
