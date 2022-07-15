import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: none;
`

export const Icon = styled.i`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.secondary};
  font-size: 1.2em;
  padding: 2px;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`
