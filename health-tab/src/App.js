import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <Navbar className="main-header">
        <h1 className="page-logo">
          <Logo className="logo" />
        </h1>
      </Navbar>
    );
  }
}

export default App;
