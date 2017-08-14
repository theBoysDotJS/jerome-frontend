import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
