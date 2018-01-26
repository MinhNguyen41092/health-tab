import React from 'react';
import styled from 'styled-components';

function NavList(props) {
  return (
    <ul className={props.className}>
      {props.children}
    </ul>
  )
}

export default NavList;
