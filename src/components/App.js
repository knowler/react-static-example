import React from 'react'
import { Link, Router } from '@reach/router'
import { Root, Routes } from 'react-static'

export const App = () => (
  <Root>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <div className="content">
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </div>
  </Root>
)
