import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tom', age:27 },
      { name: 'Jenn', age: 29 },
      { name: 'Chumbo', age: 96 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

switchNameHandler = (newName) => {
  // console.log('Was clicked!')
  // THIS METHOD IS WRONG DON'T DO IT: this.state.persons[0].name = 'Thomas'
  this.setState({
    persons: [
    { name: newName, age:27 },
    { name: 'Jenn', age: 29 },
    { name: 'Chumbo', age: 33 }
  ] 
})
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
    { name: 'Tom', age:27 },
    { name: event.target.value, age: 29 },
    { name: 'Chumbo', age: 33 }
  ] 
})
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}/>
          })}
  
      </div>
      )
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;
