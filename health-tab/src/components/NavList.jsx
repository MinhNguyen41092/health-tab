import React from 'react';
import styled from 'styled-components';

class NavList extends React.Component {
  render() {
    return (
      <ul className={this.props.className}>
        {this.props.children}
      </ul>
    )
  }
}

export default styled(NavList)`
  display: inline-block;
`;
