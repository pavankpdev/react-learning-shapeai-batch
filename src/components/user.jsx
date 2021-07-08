import React, { useState, useEffect } from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("earth");

  // componentDidMount
  useEffect(() => {
    // heavy computation
    console.log("component mounting");

    // componentWillUnMount
    return console.log("bye bye");
  }, []);

  // componentDidUpdate
  // shouldComponentUpdate
  useEffect(() => {
    console.log("Planet changes");
  }, [planet]);

  return (
    <div>
      <h1> {props.name} </h1>
      <p> {props.description} </p>
      <button onClick={() => setPlanet("pluto")}>{planet}</button>
    </div>
  );
};

export default User;

// state

// React 16

// Hooks -> power to you functional components

// ->  Life Cycle methods

// -> Hooks