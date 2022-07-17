import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to left,
    ${props => props.theme.colors.background},
    #00a6ed 70%
  );
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 8px;

  @media screen and (max-width: 828px) {
    flex-direction: column;
  }
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`

export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
`

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
`

export const Title = styled.h1`
  letter-spacing: 1px;
  font-size: 1.8em;
  font-weight: 700;
`

export const Text = styled.p`
  text-indent: 2em;
  text-align: justify;
  padding-top: 5px;
  font-size: 1.3em;
`
