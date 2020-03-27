import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from "react-router";
import PrivateRoute from "./auth/PrivateRoute";
import Jokes from "./components/Jokes";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Jokes App</h1>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/jokes">Jokes</Link>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/jokes" component={Jokes} />
      </div>
    </Router>
  );
}

export default App;
