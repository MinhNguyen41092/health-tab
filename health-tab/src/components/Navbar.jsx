import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

function Logo(props) {
  return (
    <a className={props.className} href="javascript:void(0)">
      {props.children}
    </a>
  )
}

const StyledLogo = styled(Logo)`
  display: inline-block;

  width: 128px;
  height: 40px;

  background: url(${logo}) no-repeat;
`;

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
