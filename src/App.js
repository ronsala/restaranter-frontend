import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Home from './components/Home'
import AppBarMain from './components/AppBarMain';
import { RestaurantsContainer } from './features/restaurants/RestaurantsContainer';
import { RestaurantContainer } from './features/restaurants/RestaurantContainer';

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Box color="secondary.main">
            <Grid 
              container 
              spacing={2}
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs={12}>
                <AppBarMain />
                 <Switch>
                  <Route path="/restaurants/:restaurantId" component={RestaurantContainer} />
                  <Route path="/restaurants" component={RestaurantsContainer} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </Router>
  );
}

export default App;
