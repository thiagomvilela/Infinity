import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
`

export const Button = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 1.2em;
  border: none;
  transition: all .4s;

  &:hover{
    color: ${props => props.theme.colors.secondary};
  }
`
