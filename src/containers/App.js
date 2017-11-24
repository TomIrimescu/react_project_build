import React, {Component} from 'react';

import AppStyle from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    // console.log('Log inside constructor [props.title]: ' + props.title);
    console.log('[App.js] Inside Constructor', props);
    this.state = { // option 1 for initializing state - 'this' keyword is required
      persons: [
        {id: 'hhhd', name: 'Max', age: 28},
        {id: 'yhhh', name: 'Manu', age: 29},
        {id: 'kjkjk', name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }
  // console.log('Log outside constructor [this.props.title]: ' + this.props.title);
  /*  state = {  // option 2 preferred approach for initializing state - outside constructor
    persons: [
      {id: 'hhhd', name: 'Max', age: 28},
      {id: 'yhhh', name: 'Manu', age: 29},
      {id: 'kjkjk', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };*/
  
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }
  
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }
  
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
    console.log('[App.js] Inside render()');
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
          appTitle={this.props.title}
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
