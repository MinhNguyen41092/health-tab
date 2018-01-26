import React from 'react';
import styled from 'styled-components';

function Link(props) {
  return (
    <a href={props.href} id={props.id} className={props.className}>
      {props.children}
    </a>
  )
}

export default styled(Link)`
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  color: #444;
`;
