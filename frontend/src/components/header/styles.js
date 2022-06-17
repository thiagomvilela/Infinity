import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`
