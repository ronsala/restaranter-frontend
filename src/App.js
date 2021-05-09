import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { RestaurantContainer } from './containers/restaurantContainer/RestaurantContainer';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        App component
        {/* <RestaurantContainer /> */}
      </div>
    </Router>
  );
}

export default App;
