import styled from 'styled-components'

export const Container = styled.table`
  background-color: ${props =>
    props.theme.title == 'light' ? '#00000010' : '#ffffff10'};
  border: 2px solid ${props => props.theme.colors.primary};
  width: 100%;
`

export const HeadRow = styled.thead``

export const BodyRow = styled.tbody``

export const Title = styled.th`
  padding: 8px;
  padding-right: 32px;

  border-bottom: 2px solid ${props => props.theme.colors.primary};
`

export const Column = styled.td`
  padding: 8px;
`

export const Row = styled.tr``
