import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logo from '../components/Logo';

storiesOf('Logo', module)
  .add('page logo', () => (
    <Logo className="logo" />
  ));
  