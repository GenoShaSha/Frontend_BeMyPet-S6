import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignOut from "./Components/SignOut";
import SignUp from "./Components/SignUp";
import SideBar from "./Components/SideBar";
import NotLoggedIn from "./Components/JWT/NotLoggedIn";
// import { DataProvider } from './components/CartActions';
import Authentication from "./Components/JWT/Authentication";
import AdopterMatches from "./Components/AdopterMatches";
import ShelterMatches from "./Components/ShelterMatches";
import IsAdmin from "./Components/JWT/IsAdmin";

function App() {
  return (
    // <DataProvider>
    <div>
      <Router>
        <SideBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route
              path="/Dashboard"
              exact
              component={NotLoggedIn(Dashboard)}
            ></Route>
            <Route
              path="/SignIn"
              exact
              component={Authentication(SignIn)}
            ></Route>
            <Route
              path="/SignUp"
              exact
              component={Authentication(SignUp)}
            ></Route>
            <Route
              path="/AdopterMatches"
              exact
              component={NotLoggedIn(AdopterMatches)}
            ></Route>
             <Route
              path="/ShelterMatches"
              exact
              component={IsAdmin(ShelterMatches)}
            ></Route>
            <Route path="/SignOut" exact component={SignOut}></Route>
          </Switch>
        </div>
      </Router>
    </div>
    // </DataProvider>
  );
}

export default App;
