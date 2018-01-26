import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from './Link';
import NavItem from './NavItem';

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

storiesOf('NavItem', module)
  .add('nav item', () => (
    <NavItem key={1} className="nav-item">
      <NavLink className="nav-link" id="benefits" 
        href="javascript:void(0)">benefits</NavLink>
    </NavItem>
  ));
