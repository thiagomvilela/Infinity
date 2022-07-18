import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TitleLabel = styled.label`
  color: ${props => props.theme.colors.primary};
  font-size: 0.8em;
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  border-radius: 4px;
  min-height: 40px;
  border: 2px solid #0000001f;
  padding: 4px;
`

export const Icon = styled.i`
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
`

export const Label = styled.label`
  caret-color: ${props => props.theme.colors.primary};
  color: #757575;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  letter-spacing: 1px;
  border-left: 1px solid ${props => props.theme.colors.primary};
  padding-left: 12px;
`

export const Input = styled.input`
  display: none;
`
