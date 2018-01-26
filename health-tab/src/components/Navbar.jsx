import React, { Component } from 'react';
import styled from 'styled-components';

function Navbar(props) {
  return (
    <nav className={props.className}>
      {props.children}
    </nav>
  )
}

export default styled(Navbar)`
  height: 60px;

  background-color: #fff;
`;
