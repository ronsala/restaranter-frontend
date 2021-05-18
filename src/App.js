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
import Grid from '@material-ui/core/Grid';

// import NB from './components/NB';
import AppBarMain from './components/AppBarMain';
import RestaurantsSelectCard from './components/RestaurantsSelectCard'
import SelectCardsContainer from './components/SelectCardsContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  AppBarMain: {
    marginBottom: 2,
  },
}))

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Box>
            <AppBarMain />
            <Grid container spacing={1}>
              <Grid item xl={6} md={6} sm={12} xs={12}>
                <RestaurantsSelectCard />
              </Grid>
              <Grid item xl={6} md={6} sm={12} xs={12}> 
                <RestaurantsSelectCard />
            </Grid>
            </Grid>
          </Box>
        </Container>
      </Router>
    </div>

  );
}

export default App;
