import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import GlobalStyles from './styles/global'
import Header from './components/header'

import { NavbarContextProvider } from './contexts/NavbarContext'
import { ThemeContextProvider  } from './contexts/ThemeContext'

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <NavbarContextProvider>
          <Header />
          <Routes />
        </NavbarContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
