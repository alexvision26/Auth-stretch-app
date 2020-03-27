import React, { useState } from "react";
import axios from "axios";

const Register = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(login);
    axios
      .post("http://localhost:3300/api/auth/register", login)
      .then(res => {
        console.log(res);
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
      <h2>Register Your Account Today!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">New Username: </label>
        <br />
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Your Username.."
        ></input>
        <br />
        <label htmlFor="password">New Password: </label>
        <br />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Your Password.."
        ></input>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
