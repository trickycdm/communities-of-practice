import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Topbar from 'src/Components/Topbar/Topbar'
import PrivateRoute from 'src/Components/PrivateRoute'
import Login from 'src/Views/Login/Login'
import Homepage from 'src/Views/Homepage/Homepage'
import './style.scss'

const PrivatePage = () => <h2>Private</h2>

class App extends Component {
  render () {
    return (
      <Router>
        <div className='main-container'>
          <Topbar />
          <Route path='/' exact component={Homepage} />
          <Route path='/login/' component={Login} />
          <PrivateRoute path='/private' authenticated={false} component={PrivatePage} />
        </div>
      </Router>
    )
  }
}

export default App
