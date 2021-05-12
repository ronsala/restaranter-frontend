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
      <NB />
      <h1>FUTURE APP HERE</h1>
    </div>

  );
}

export default App;
