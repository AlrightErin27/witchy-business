import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import Laboratory from "./components/Laboratory";

function App() {
  return (
    <div>
      {/* 📡--------📡- 📡- 📡- ROUTER STUFF 📡- 📡- 📡---------📡 */}
      <Router>
        <Switch>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/Laboratory">
            <Laboratory />
          </Route>
          <Redirect to="/welcome"></Redirect>
        </Switch>
      </Router>
      {/* 📡- 📡- 📡-📡- 📡- 📡-📡- 📡- 📡-📡- 📡- 📡-📡- 📡- 📡-📡- */}
    </div>
  );
}

export default App;
