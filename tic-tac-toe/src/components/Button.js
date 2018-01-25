import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
