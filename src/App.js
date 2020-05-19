import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Topbar } from 'Components/Topbar/Topbar'
import { Homepage } from 'Views/Homepage/Homepage'
import { AddCommunityView } from 'Views/AddCommunity/AddCommunity'
import { CommunitiesView } from 'Views/Communities/Communities'
import { SignInView } from 'Views/SignInView/SignInView'
import './style.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Topbar />
          <Route path="/" exact component={Homepage} />

          <Switch>
            <Route path="/add-community/" component={AddCommunityView} />
            <Route path="/communities/" component={CommunitiesView} />
          </Switch>

          <Switch>
            <Route path="/sign-in/" component={SignInView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
