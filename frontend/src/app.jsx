import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import GlobalStyles from './styles/global'
import { ThemeContextProvider  } from './contexts/ThemeContext'

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
