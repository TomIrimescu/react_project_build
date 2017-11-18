import React, {Component} from 'react';
import AppClass from './App.css';
import Person from './Person/Person';
import {blue} from '../src/index.css';

class App extends Component {
  state = {
    persons: [
      {id: 'hhhd', name: 'Max', age: 28},
      {id: 'yhhh', name: 'Manu', age: 29},
      {id: 'kjkjk', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]) // alternative code
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( {persons: persons} );
    
  };
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; // This approach will mutate the state data
    // const persons = this.state.persons.slice(); // This approach copies the array
    const persons = [...this.state.persons]; // spread operator also copies the array -preferred way
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  
  render()  {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
  
    //region Conditional Content
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      
      style.backgroundColor = 'red';
    }
    //endregion
    
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(AppClass.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push(AppClass.bold); // classes = ['red', 'bold']
    }
    if (this.state.persons.length === 0) {
      classes.length = 0;  // classes = [] --this works with a 'const' declaration
      // classes = []; // classes = [] --this only works if 'classes' is declared with 'let'
    }
    
    return (
        <div className={AppClass.App}>
          <h1 className={blue}>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons} {/* Conditional Content inserted */}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
