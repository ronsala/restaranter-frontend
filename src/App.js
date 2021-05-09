import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { NavBarInstance } from './components/NavBarInstance';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBarInstance />
      </div>
    </Router>
  );
}

export default App;
