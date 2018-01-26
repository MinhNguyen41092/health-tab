import React, { Component } from 'react';
import StyledLogo from './Logo';

function Navbar() {
  return (
    <header className="main-header">
      <h1 className="title">
        <StyledLogo className="title-link" />
      </h1>
    </header>
  )
}

export default Navbar;
