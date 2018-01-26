import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from './Link';

storiesOf('Link', module)
  .add('nav link', () => (
    <Link className="nav-link" id="benefits" 
      href="javascript:void(0)" width="140px" height="60px">Benefits</Link>
  ));
