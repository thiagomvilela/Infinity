import styled from 'styled-components'

export const Container = styled.div`
  background-color: blue;
`

export const Text = styled.p`
  text-align: center;
  color: ${props => props.highlighted
    ? props.theme.colors.text
    : props.theme.colors.background
  };
`
