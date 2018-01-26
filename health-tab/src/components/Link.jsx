import React from 'react';
import styled from 'styled-components';

class Link extends React.Component {
  render() {
    return (
      <a href={this.props.href} id={this.props.id} className={this.props.className}>
        {this.props.children}
      </a>
    )
  }
}

export default styled(Link)`
  text-decoration: none;
  color: #444;
`;
