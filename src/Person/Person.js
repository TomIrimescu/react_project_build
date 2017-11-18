import React from 'react';
import PersonStyle from './Person.css';

const person = (props) => {

  return (
    <div className={PersonStyle.Person}>
      {/*example of global class ':global .green {color: green;}'*/}
      <p className="green"
         onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;