import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import GlobalStyles from './styles/global'

import { NavbarContextProvider } from './contexts/NavbarContext'
import { ThemeContextProvider } from './contexts/ThemeContext'

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <NavbarContextProvider>
          <Routes />
        </NavbarContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
