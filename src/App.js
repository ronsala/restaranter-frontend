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
import About from './components/About';
import AppBarMain from './components/AppBarMain';
import Footer from './components/Footer';
import Home from './components/Home'
import { ItemForm } from './features/items/ItemForm';
import { MenuForm } from './features/menus/MenuForm';
import Proprietors from './components/Proprietors';
import { RestaurantContainer } from './features/restaurants/RestaurantContainer';
import { RestaurantForm } from './features/restaurants/RestaurantForm';
import { RestaurantsContainer } from './features/restaurants/RestaurantsContainer';
import { RouteNewRestaurant } from './features/restaurants/RouteNewRestaurant';
import { SectionForm } from './features/sections/SectionForm'
import SignupLogin from './components/SignupLogin';
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
                      <Route path="/restaurants/:restaurantId/edit" component={RestaurantForm} />
                      <Route path="/restaurants/new" component={RestaurantForm} />
                      <Route path="/restaurants/route_new" component={RouteNewRestaurant} />
                      <Route path="/proprietors" component={Proprietors} />
                      <Route path="/restaurants/:restaurantId/menus/:menuId/edit" component={MenuForm} />
                      <Route path="/restaurants/:restaurantId/menus/new" component={MenuForm} />
                      <Route exact path="/restaurants/:restaurantId" component={RestaurantContainer} />
                      <Route exact path="/restaurants/:restaurantId/menus/:menuId/sections/:sectionId/edit" component={SectionForm} />
                      <Route path="/restaurants/:restaurantId/menus/:menuId/sections/new" component={SectionForm} />
                      <Route exact path="/restaurants" component={RestaurantsContainer} />
                      <Route path="/signuplogin" component={SignupLogin} />
                      <Route path="/users/:userId" component={UserContainer} />
                      <Route exact path="/" component={Home} />
                      <Route exact path="/restaurants/:restaurantId/menus/:menuId/sections/:sectionId/items/edit" component={ItemForm} />
                      <Route exact path="/restaurants/:restaurantId/menus/:menuId/sections/:sectionId/items/new" component={ItemForm} />
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
