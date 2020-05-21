import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Topbar } from 'Components/Topbar/Topbar'
import { Homepage } from 'Views/Homepage/Homepage'
import { CommunitiesView } from 'Views/Communities/Communities'
import { SignInView } from 'Views/SignInView/SignInView'
import './style.scss'

const { AddCommunityView } = lazy(() => import('Views/AddCommunity/AddCommunity'))

const Loader = () => <>Loading&hellip;</>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Topbar />
          <Suspense fallback={<Loader />}>
            <Route path="/" exact component={Homepage} />

            <Switch>
              <Route path="/add-community/" component={AddCommunityView} />
              <Route path="/communities/" component={CommunitiesView} />
            </Switch>

            <Switch>
              <Route path="/sign-in/" component={SignInView} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    )
  }
}

export default App
