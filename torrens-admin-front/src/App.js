import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";

import Login from "./pages/login";
import { Register } from "./pages/register";
import DashBoard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/inicio" component={DashBoard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
