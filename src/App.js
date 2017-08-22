import React, { Component } from 'react';
import NavBar from "./components/elements/NavBar.js"
import './css/App.css';

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
// Socket.receiveMessage();
export default App;
