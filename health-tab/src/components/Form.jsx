import React from 'react';
import styled from 'styled-components';

function Form(props) {
  return (
    <form className={props.className}>
      {props.children}
    </form>
  )
}