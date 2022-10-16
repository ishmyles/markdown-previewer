import React, { Component } from 'react';
import Navbar from './components/navbar';
import Editor from './components/editor';
import './assets/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() { 
    return ( 
      <div className="App">
        <Navbar darkTheme={this.state.darkMode} changeTheme={this.toggleTheme}/>
        <Editor darkTheme={this.state.darkMode}/>
      </div>
    );
  }
}

export default App;
