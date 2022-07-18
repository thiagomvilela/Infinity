import React from 'react'
import {
  Container,
  Icon,
  Input,
  Label,
  TitleLabel,
  WrapperInput,
} from './styles'

const UploadField = () => {
  return (
    <Container>
      <TitleLabel>Arquivo</TitleLabel>
      <WrapperInput>
        <Icon className="far fa-file"></Icon>
        <Label htmlFor="file">Upload de Arquivo</Label>
        <Input type="file" accept="image/*,.pdf" name="file" id="file" />
      </WrapperInput>
    </Container>
  )
}

export default UploadField
