// import React, { useState } from "react";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import "@material-tailwind/react/tailwind.css";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

// import NB from './components/NB';
import AppBarMain from './components/AppBarMain';
import SelectCardsContainer from './components/SelectCardsContainer';

function App() {
  return (
    <div>
      <Router>
        <Box>
          <Container>
            {/* <NB /> */}
            <AppBarMain />
            <SelectCardsContainer />
          </Container>
        </Box>
      </Router>
    </div>

  );
}

export default App;
