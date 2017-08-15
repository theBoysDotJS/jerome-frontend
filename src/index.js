import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import Signup from './components/pages/Signup.js';
import Dashboard from './components/pages/Dashboard.js';
import ChatRoom from './components/pages/ChatRoom.js';
import Login from './components/pages/Login.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/conversation/:id" component={ChatRoom}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
