import React, { Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Topbar } from 'Components/Topbar/Topbar'
import { Homepage } from 'Views/Homepage/Homepage'
import { CommunitiesView } from 'Views/Communities/Communities'
import { SignInView } from 'Views/SignInView/SignInView'
import { checkLocalStorage } from './Utils/local-storage'
import { setActiveUser } from 'Redux/user'
import { AuthenticatedRoute } from './Components/AuthenticatedRoute/AuthenticatedRoute'
import './style.scss'
import { AddCommunityView } from 'Views/AddCommunity/AddCommunity'

const Loader = () => <>Loading&hellip;</>

const App = () => {
  const dispatch = useDispatch()

  const email = checkLocalStorage('email')
  if (email) dispatch(setActiveUser({ email }))

  return (
    <Router>
      <div className="main-container">
        <Topbar />
        <Suspense fallback={<Loader />}>
          <Route path="/" exact component={Homepage} />

          <Switch>
            <AuthenticatedRoute path="/add-community/" component={AddCommunityView} />
            <AuthenticatedRoute path="/communities/" component={CommunitiesView} />
          </Switch>

          <Switch>
            <Route path="/sign-in/" component={SignInView} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
