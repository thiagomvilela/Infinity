import React from 'react'

import dark from '../../styles/theme/dark'
import light from '../../styles/theme/light'
import { useTheme } from '../../contexts/ThemeContext'

import { Container, Icon } from './styles'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }

  const renderIcon = () => {
    if (theme.title == 'light') {
      return <Icon className="fas fa-moon" />
    }
    return <Icon className="fas fa-sun" />
  }

  return (
    <Container onClick={() => handleClick()}>
      {renderIcon()}
    </Container>
  )
}

export default ToggleTheme
