import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation logged={true} />
      {/* Daca vrei sa accesezi router logged schimba true->false pe viitor va fi optiune daca are un token valid*/}
    </div>
  );
}

export default App;
