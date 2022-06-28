import styled from 'styled-components'

export const Container = styled.div`
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  border: none;
  @media screen and (min-width: 828px) {
    display: none;
  }
`
