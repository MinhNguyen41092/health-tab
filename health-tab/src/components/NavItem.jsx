import React from 'react';
import styled from 'styled-components';

class NavItem extends React.Component {
  render() {
    return (
      <li key={this.props.key} className={this.props.className}>
        {this.props.children}
      </li>
    )
  }
}

export default styled(NavItem)`
  display: inline-block;
`;
