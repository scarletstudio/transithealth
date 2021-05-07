import React from 'react'
import { Root, Routes } from 'react-static'

// import { Link, Router } from 'components/Router'
import { Switch, Route, Link } from 'react-router-dom'

import './style/reset.css'
import './style/app.css'

function App() {
  return (
    <Root>
      <nav>
        <Link to="./">TransitHealth</Link>
        <Link to="./about">About</Link>
        <Link to="./explorer">Explorer</Link>
        <Link to="./questions">Questions</Link>
      </nav>
      <div className="page">
        <React.Suspense fallback={<em>Loading...</em>}>
          {/*<Router>
            <Routes path="*" />
          </Router>*/}
          <Switch>
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
