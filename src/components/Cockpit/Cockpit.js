import React from 'react';

import CockpitStyle from './Cockpit.css';

const cockpit = (props) => {
  const classes = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = CockpitStyle.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(CockpitStyle.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push(CockpitStyle.bold); // classes = ['red', 'bold']
  }
  if (props.persons.length === 0) {
    classes.length = 0;  // classes = [] --this works with a 'const' declaration
    // classes = []; // classes = [] --this only works if 'classes' is declared with 'let'
  }
  
  return(
    <div className={CockpitStyle.Cockpit}>
      <h1 className={CockpitStyle.blue}>{props.appTitle}</h1> {/* example of imported style from random stylesheet */}
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
} ;

export default cockpit;