import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(login);
    axios
      .post("http://localhost:3300/api/auth/login", login)
      .then(res => {
        window.localStorage.setItem("token", res.data.token);
        setLogin({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <h2>Log Into Your Account!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <br />
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Your Username.."
        ></input>
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Your Password.."
        ></input>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
