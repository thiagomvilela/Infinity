import styled from 'styled-components'

export const Container = styled.table`
  border: 2px solid ${props => props.theme.colors.primary};
  width: 100%;
`

export const HeadRow = styled.thead``

export const BodyRow = styled.tbody``

export const Title = styled.th`
  padding: 8px;
  font-size: 0.8em;

  border-bottom: 2px solid ${props => props.theme.colors.primary};

  @media screen and (min-width: 828px) {
    font-size: 1em;
  }
`

export const Column = styled.td`
  padding: 8px;
  font-size: 0.8em;

  @media screen and (min-width: 828px) {
    font-size: 0.9em;
  }
`

export const Row = styled.tr``
