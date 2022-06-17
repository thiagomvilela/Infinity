import React from 'react'
import './styles/global.css'
import './styles/theme.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
