import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${props => props.theme.colors.background};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`

export const Icon = styled.i`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1.2em;
  padding: 2px;
  transition: transform .4s;

  &:hover{
    transform: rotateZ(-60deg);
  }
`
