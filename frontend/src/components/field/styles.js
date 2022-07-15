import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const Input = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  caret-color: ${props => props.theme.colors.primary};
  line-height: 2em;
  text-align: justify;
  border: none;
  border-left: 1px solid ${props => props.theme.colors.primary};
  padding-left: 12px;
  width: 100%;
`

export const Icon = styled.i`
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
`

export const Label = styled.label`
  color: ${props => props.theme.colors.primary};
  font-size: 0.8em;
`
