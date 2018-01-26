import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

function Navbar() {
  return (
    <header className="main-header">
      <h1 className="page-logo">
        <Logo className="logo" />
      </h1>
    </header>
  )
}

export default Navbar;
