import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from "react-router";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Jokes App</h1>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  );
}

export default App;
