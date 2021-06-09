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
import Footer from './components/Footer'

export const App = () => {
  return (
    <Router>
        <Container maxWidth="xl"> <Box color="secondary.main" display="flex">
            <Grid container>
              <Grid item xs={12}>
                <AppBarMain />
                <div className="main">
                <Switch>
                  <Route path="/restaurants/:restaurantId" component={RestaurantContainer} />
                  <Route path="/restaurants" component={RestaurantsContainer} />
                  <Route exact path="/" component={Home} />
                 </Switch>
                </div>
                 <Footer />
              </Grid>
            </Grid>
          </Box>
        </Container>
    </Router>
  );
}

export default App;
