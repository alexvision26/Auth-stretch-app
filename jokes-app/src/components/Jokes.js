import React, { useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";

const Jokes = props => {
  const [jokes, setJokes] = useState([]);

  const getJokes = e => {
    e.preventDefault();
    axiosWithAuth()
      .get("/api/jokes")
      .then(res => {
        setJokes(res.data);
      });
  };

  const hideJokes = e => {
    e.preventDefault();
    setJokes([]);
  };
  return (
    <div>
      {jokes.length === 0 ? (
        <>
          <button onClick={getJokes}>Click Me!</button>
        </>
      ) : (
        <>
          <button onClick={hideJokes}>Hide Jokes</button>
        </>
      )}
      {jokes.length > 0
        ? jokes.map(joke => {
            return (
              <div>
                <p>{joke.joke}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Jokes;
