import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import NavList from './components/NavList';
import NavItem from './components/NavItem';
import Link from './components/Link';

class App extends Component {
  render() {
    return (
      <Navbar className="main-header" />
    );
  }
}

export default App;
