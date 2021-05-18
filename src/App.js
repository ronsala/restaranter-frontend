import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBarMain from './components/AppBarMain';
import ProprietorsSelectCard from './components/ProprietorsSelectCard'
import PatronsSelectCard from './components/PatronsSelectCard'

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Box>
            <AppBarMain />
            <Grid container spacing={2}>
              <Grid item xl={6} md={6} sm={12} xs={12}>
                <ProprietorsSelectCard />
              </Grid>
              <Grid item xl={6} md={6} sm={12} xs={12}> 
                <PatronsSelectCard />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
