import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('My App/Buttons/Simple', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ));
  
storiesOf('My App/Buttons/Emoji', module)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
  