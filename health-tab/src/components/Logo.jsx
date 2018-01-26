import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

function Logo(props) {
  return (
    <a className={props.className} href="javascript:void(0)">
      {props.children}
    </a>
  )
}

export default styled(Logo)`
  display: block;

  width: 128px;
  height: 40px;
  margin-left: 30px;

  background: url(${logo}) no-repeat;
`;
