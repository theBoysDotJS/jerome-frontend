import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import Signup from './components/pages/Signup.js';
import Dashboard from './components/pages/Dashboard.js';
import ChatRoom from './components/pages/ChatRoom.js';
import Login from './components/pages/Login.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import auth from "./auth.js"


var authCheck = (nextState, replace) => {
  if (auth.isLoggedIn() === false) {
    replace({ pathname : '/login'})
  }
}

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Dashboard} onEnter={authCheck}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/conversation/:id" component={ChatRoom} onEnter={authCheck}/>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
