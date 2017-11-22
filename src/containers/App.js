import React, {Component} from 'react';

import AppStyle from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
    
    this.setState({persons: persons});
    
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
  
  render() {
    //region Conditional Content
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }
    //endregion
    
    return (
      <div className={AppStyle.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons} {/* Conditional Content inserted */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
