import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router";
import Login from './pages/login';
import { Register } from './pages/register';

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
