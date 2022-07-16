import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: stretch;
  gap: 8px;

  @media screen and (min-width: 828px) {
    flex-wrap: nowrap;
  }
`

export const Title = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  padding: 8px;
  margin: 0;
`

export const LeftBox = styled.div`
  background-color: ${props =>
    props.theme.title == 'light' ? '#00000010' : '#ffffff10'};
  width: 100%;
  max-width: 828px;
  border-radius: 8px;
  padding: 8px 16px;
`

export const RightBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 8px;

  @media screen and (min-width: 828px) {
    width: initial;
    min-width: 256px;
  }
`
