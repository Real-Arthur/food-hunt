import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from '../components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
      <Redirect from="/" to="/home" />
      <Switch>
        <Route path="/home" exact component={HomePage} />
      </Switch>
    </Router>
    )
  }
}

export default connect()(App);
