import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation logged={false}/>
    </div>
  );
}

export default App;
