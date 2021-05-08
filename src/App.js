import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { Menu } from './features/menus/Menu';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        App component
        {/* <RestaurantsContainer /> */}
      </div>
    </Router>
  );
}

export default App;
