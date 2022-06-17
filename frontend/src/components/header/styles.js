import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.text};
`

export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
