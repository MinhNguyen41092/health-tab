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

export default StyledLogo;
