import React from 'react'
import store from 'Redux/store'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import LoginForm from 'Components/LoginForm/LoginForm'
import Button from 'Components/Button/Button'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('standard button', () => <Button onClick={action('clicked')}>Hello Button</Button>)

// Wrap our login form in our redux store
storiesOf('Login Form', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('empty form', () => <LoginForm />)
