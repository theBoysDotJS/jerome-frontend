import React, { Component } from 'react';
import NavBar from "./components/elements/NavBar.js"
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
