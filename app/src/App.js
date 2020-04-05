import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Topbar from 'Components/Topbar/Topbar'
import PrivateRoute from 'Components/PrivateRoute'
import './style.scss'

const Home = () => <h2>Homepage</h2>
const PrivatePage = () => <h2>Private</h2>
const Login = lazy(() => import('./Views/Login/Login'))

const Loader = () => <>Loading&hellip;</>

class App extends Component {
  render () {
    return (
      <Router>
        <div className='main-container'>
          <Topbar />

          <Suspense fallback={<Loader />}>
            <Route path='/' exact component={Home} />
            <Route path='/login/' component={Login} />
            <PrivateRoute path='/private' authenticated={false} component={PrivatePage} />
          </Suspense>
        </div>
      </Router>
    )
  }
}

export default App
