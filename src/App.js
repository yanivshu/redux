import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import Login from './components/login';
import SignIn from './components/signIn';
import Questions from './components/questions';
import { connect } from 'react-redux';


class App extends Component {
  render() {

    const state = store.getState();
    return (
      <div className="App">
        <p className="App-intro">
          { state == null ? <Login /> : <signIn />}
        </p>
      </div>
    );
  }
}

export default App;

