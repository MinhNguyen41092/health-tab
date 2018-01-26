import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logo from './Logo';
import Link from './Link';
import NavItem from './NavItem';
import NavList from './NavList';
import Navbar from './Navbar';

const NavLink = Link.extend`
    display: inline-block;
    
    width: 140px;
    height: 60px;

    text-align: center;
    line-height: 5;

    &:hover {
      border-bottom: 2px solid #6cb768;
    }
`;

storiesOf('Navbar', module)
  .add('navbar', () => (
    <nav className="main-header">
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
  ))
