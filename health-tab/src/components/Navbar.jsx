import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavList from './NavList';
import NavItem from './NavItem';
import Link from './Link';

function Navbar(props) {
  return (
    <nav className={props.className}>
      <h1 className="page-logo">
          <Logo className="logo" />
      </h1>

      <NavList className="nav-list">
        <NavItem key={1} className="nav-item">
          <Link className="nav-link" id="benefits" href="javascript:void(0)">Benefits</Link>
        </NavItem>

        <NavItem key={2} className="nav-item">
          <Link className="nav-link" id="features" href="javascript:void(0)">Features</Link>
        </NavItem>

        <NavItem key={3} className="nav-item">
          <Link className="nav-link" id="how-it-works" href="javascript:void(0)">How It Works</Link>
        </NavItem>

        <NavItem key={4} className="nav-item">
          <Link className="nav-link" id="resources" href="javascript:void(0)">Resources</Link>
        </NavItem>
      </NavList>
    </nav>
  )
}

export default styled(Navbar)`
  height: 60px;

  background-color: #fff;
`;
