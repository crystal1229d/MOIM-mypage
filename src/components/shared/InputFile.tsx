import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colorPalette'

const HiddenInput = styled.input`
  display: none;
`

const UploadButton = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 2px dashed ${colors.gray300};
  background-color: ${colors.gray50};
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  color: ${colors.gray};
  font-size: 14px;
  font-weight: 500;

  &:hover {
    border-color: ${colors.blue};
    color: ${colors.blue};
  }
`

const PlusIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`

interface InputFileProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputFile: React.FC<InputFileProps> = ({ onChange }) => (
  <div>
    <HiddenInput
      type="file"
      id="fileUpload"
      accept="image/*"
      onChange={onChange}
    />
    <UploadButton htmlFor="fileUpload">
      <PlusIcon color={colors.gray}>+</PlusIcon>
      사진 첨부
    </UploadButton>
  </div>
)

export default InputFile
