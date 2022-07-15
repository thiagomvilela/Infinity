import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import GlobalStyles from './styles/global'

import { NavbarContextProvider } from './contexts/NavbarContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { AuthContextProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AuthContextProvider>
          <NavbarContextProvider>
            <Routes />
          </NavbarContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
