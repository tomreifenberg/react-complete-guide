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
    otherState: 'some other value'
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

  render() {
const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor:'pointer'
};

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Thomas!!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}  />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Tom!')}
          changed={this.nameChangedHandler}>My Hobbies: Partying</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;
