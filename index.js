import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React for reaction',
      task(){
        return "learners.";
      }
    };
  }

  render() {
    return (
      <div>
       <h1>{this.state.name} {this.state.task()}</h1>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
