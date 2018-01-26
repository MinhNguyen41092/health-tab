import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from '../components/Link';

storiesOf('Link', module)
  .add('nav link', () => (
    <Link className="nav-link" id="features" href="javascript:void(0)">Features</Link>
  ));
