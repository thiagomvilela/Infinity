import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import InfinityDark from '../../assets/infinity-dark-mode.gif'
import InfinityLight from '../../assets/infinity-light-mode.gif'
import { Image, Subtitle, Title } from './styles'

const NotFound = () => {
  const { theme } = useTheme()

  const renderGif = () => {
    if (theme.title == 'light') {
      return <Image src={InfinityLight} />
    }

    return <Image src={InfinityDark} />
  }

  return (
    <>
      {renderGif()}
      <Title>Erro 404</Title>
      <Subtitle>Página não encontrada</Subtitle>
    </>
  )
}

export default NotFound
