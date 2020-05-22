import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory()
  const { user } = useSelector(state => (state), shallowEqual)

  return (
    <Route
      {...rest}
      render={
        props => user.email
          ? <Component {...props} />
          : history.push('/sign-in')
      }
    />
  )
}

export { AuthenticatedRoute }
