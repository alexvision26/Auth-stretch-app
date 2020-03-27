import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from "react-router";
import PrivateRoute from "./auth/PrivateRoute";
import Jokes from "./components/Jokes";

function App() {
  const [success, setSuccess] = useState("");
  console.log(success);
  return (
    <Router>
      <div className="App">
        <h1>Jokes App</h1>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/jokes">Jokes</Link>
        <Route path="/register">
          <Register setSuccess={setSuccess} />
        </Route>
        <Route path="/login">
          <h2>{success}</h2>
          <Login />
        </Route>
        <PrivateRoute path="/jokes" component={Jokes} />
      </div>
    </Router>
  );
}

export default App;
