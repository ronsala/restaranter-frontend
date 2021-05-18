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
import RestaurantContainer from './containers/restaurantContainer/RestaurantContainer';

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Box>
            <AppBarMain />
            <SelectCardsContainer />
          </Box>
        </Container>
        <Switch>
          <Route path="/restaurants">
            <RestaurantContainer />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
