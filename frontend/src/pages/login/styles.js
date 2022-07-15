import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.background},
    #00a6ed 70%
  );
`

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  margin: 16px;
  border-radius: 16px;

  @media screen and (min-width: 828px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Image = styled.img`
  margin: 0 auto;
  width: 100%;
  max-width: 450px;
`
