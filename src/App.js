import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AppBarMain from './components/AppBarMain';
import SelectCardsContainer from "./components/SelectCardsContainer";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Box>
            <AppBarMain />
            <SelectCardsContainer />
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
