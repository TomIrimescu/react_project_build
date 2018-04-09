import React from "react";

import CockpitStyle from "./Cockpit.css";
import Aux from "../../hoc/Auxiliary";

const cockpit = props => {
  const classes = [];
  let btnClass = CockpitStyle.Button;
  if (props.showPersons) {
    btnClass = [CockpitStyle.Button, CockpitStyle.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    classes.push(CockpitStyle.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push(CockpitStyle.bold); // classes = ['red', 'bold']
  }
  if (props.persons.length === 0) {
    classes.length = 0; // classes = [] --this works with a 'const' declaration
    // classes = []; // classes = [] --this only works if 'classes' is declared with 'let'
  }

  return (
    <Aux>
      <h1 className={CockpitStyle.blue}>{props.appTitle}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
  
};

export default cockpit;
