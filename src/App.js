import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// IMPORT SCREENS
import Dashboard from "./view/Dashboard";
import Attempt from "./view/Attempt";
import Home from "./view/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        {/* <Route exact path='/attempt:id' component={Attempt} /> */}
        <Route exact path='/attempt/:id' component={Attempt} />
      </Switch>
    </Router>
  );
}

export default App;
