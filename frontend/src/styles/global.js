import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: ${props => props.theme.colors.background} ${props =>
  props.theme.colors.background};
  }

  *::-webkit-scrollbar {
    width: 16px;
  }
  *::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
    background: ${props => props.theme.colors.background};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 8px;
    border: 4px solid ${props => props.theme.colors.background};
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #707070;
  }
  *::-webkit-scrollbar-thumb:active {
    background-color: #909090;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Quicksand', sans-serif;
  }
`
