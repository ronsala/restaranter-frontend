import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "@material-tailwind/react/tailwind.css";
import NB from './components/NB';

function App() {
  return (
    <div>
      <Router>
        <NB />
        <h1>FUTURE APP HERE</h1>
      </Router>
    </div>

  );
}

export default App;
