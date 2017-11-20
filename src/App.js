import React, {Component} from 'react';
import AppStyle from './App.css';
import Person from './Person/Person';

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
    //region Conditional Content
    let persons = null;
    let btnClass  = '';
    
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
      
      btnClass = AppStyle.Red;
    }
    //endregion
    
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(AppStyle.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push(AppStyle.bold); // classes = ['red', 'bold']
    }
    if (this.state.persons.length === 0) {
      classes.length = 0;  // classes = [] --this works with a 'const' declaration
      // classes = []; // classes = [] --this only works if 'classes' is declared with 'let'
    }
    
    return (
        <div className={AppStyle.App}>
          <h1 className={AppStyle.blue}>Hi, I'm a React App</h1> {/* example of imported style from random stylesheet */}
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons} {/* Conditional Content inserted */}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
