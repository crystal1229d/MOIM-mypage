import { ChangeEvent, useRef } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colorPalette'

interface InputFileProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void
  previewUrl?: string
  index: number
}

function InputFile({ onChange, previewUrl, index }: InputFileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event, index)
  }

  return (
    <div>
      <HiddenInput
        type="file"
        accept="image/*"
        onChange={handleChange}
        ref={fileInputRef}
      />
      {previewUrl ? (
        <Preview src={previewUrl} alt="Image preview" onClick={handleClick} />
      ) : (
        <UploadButton onClick={handleClick}>
          <PlusIcon color={colors.gray}>+</PlusIcon>
          사진 첨부
        </UploadButton>
      )}
    </div>
  )
}

const HiddenInput = styled.input`
  display: none;
`

const UploadButton = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

const Preview = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;

  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
`

export default InputFile
