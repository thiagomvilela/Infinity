import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import GlobalStyles from './styles/global'
import { ThemeContextProvider  } from './contexts/ThemeContext'
import Header from './components/header'

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
