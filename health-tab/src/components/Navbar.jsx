import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavList from './NavList';
import NavItem from './NavItem';
import Link from './Link';

function Navbar(props) {
  const NavLink = Link.extend`
    display: inline-block;
    
    width: 140px;
    height: 60px;

    text-align: center;
    line-height: 5;
  `;

  return (
    <nav className={props.className}>
      <h1 className="page-logo">
        <Logo className="logo" />
      </h1>

      <NavList className="nav-list">
        <NavItem key={1} className="nav-item">
          <NavLink className="nav-link" id="benefits" 
            href="javascript:void(0)">benefits</NavLink>
        </NavItem>

        <NavItem key={2} className="nav-item">
          <NavLink className="nav-link" id="features" 
            href="javascript:void(0)">features</NavLink>
        </NavItem>

        <NavItem key={3} className="nav-item">
          <NavLink className="nav-link" id="how-it-works" 
            href="javascript:void(0)">how it works</NavLink>
        </NavItem>

        <NavItem key={4} className="nav-item">
          <NavLink className="nav-link" id="resources" 
            href="javascript:void(0)">resources</NavLink>
        </NavItem>
      </NavList>
    </nav>
  )
}

export default styled(Navbar)`
  height: 60px;

  background-color: #fff;
`;
