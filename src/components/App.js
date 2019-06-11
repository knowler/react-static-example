import React from 'react'
import { Link, Router } from '@reach/router'
import { Root, Routes } from 'react-static'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { globalStyles, theme } from '../theme'

export const App = () => (
  <Root>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <nav>
        <Link to="/" color='green'>Home</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </ThemeProvider>
  </Root>
)
