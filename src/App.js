import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects:[
        {
          title:"business",
          category:"Web"
        },
        {
          title:"Social",
          category:"Mobile"
        },
        {
          title:"Ecommerce",
          category:"Website"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
