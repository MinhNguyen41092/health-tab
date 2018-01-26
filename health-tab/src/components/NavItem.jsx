import React from 'react';
import styled from 'styled-components';

function NavItem(props) {
  return (
    <li key={props.key} className={props.className}>
      {props.children}
    </li>
  )
}

export default styled(NavItem)`
  display: inline-block;

  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
`;
