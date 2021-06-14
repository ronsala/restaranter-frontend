import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Home from './components/Home'
import AppBarMain from './components/AppBarMain';
import { RestaurantsContainer } from './features/restaurants/RestaurantsContainer';
import { RestaurantContainer } from './features/restaurants/RestaurantContainer';
import About from './components/About';
import Proprietors from './components/Proprietors';
import SignupLogin from './components/SignupLogin'
import Footer from './components/Footer';
import { UserContainer } from './features/users/UserContainer';

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    padding: '1%',
    position: 'relative',
  },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <Router>
        <Container maxWidth="xl"> <Box color="secondary.main" display="flex">
            <Grid container>
              <Grid item xs={12}>
                <AppBarMain />
                  <div className={classes.main}>
                    <Switch>
                      <Route path="/about" component={About} />
                      <Route path="/proprietors" component={Proprietors} />
                      <Route path="/restaurants/:restaurantId" component={RestaurantContainer} />
                      <Route path="/restaurants" component={RestaurantsContainer} />
                      <Route path="/signuplogin" component={SignupLogin} />
                      <Route path="/users/:userId" component={UserContainer} />
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
