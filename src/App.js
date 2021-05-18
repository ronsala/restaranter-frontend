import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "@material-tailwind/react/tailwind.css";
import NB from './components/NB';
import SelectCardsContainer from './components/SelectCardsContainer'

function App() {
  return (
    <div>
      <Router>
        <NB />
        <SelectCardsContainer />
        <h1>FUTURE APP HERE</h1>
      </Router>
    </div>

  );
}

export default App;
