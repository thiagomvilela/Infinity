import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

export const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Image = styled.img`
  width: 100%;
  max-width: 48px;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
`

export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
