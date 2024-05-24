import {
  FocusEventHandler,
  forwardRef,
  TextareaHTMLAttributes,
  useState,
} from 'react'
import styled from 'styled-components'

import { colors } from '../styles/colorPalette'

interface TextFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text?: string
  hasError?: boolean
}

const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  function TextField({ text, hasError, onFocus, onBlur, ...props }, ref) {
    const [focused, setFocused] = useState(false)

    const handleFocus: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      setFocused(true)
      onFocus?.(event)
    }

    const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      setFocused(false)
      onBlur?.(event)
    }

    return (
      <Textarea
        minLength={30}
        maxLength={500}
        placeholder="내용을 입력하세요.&#13;30자~500자 등록 가능"
        required
        ref={ref}
        wrap="hard"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    )
  },
)

const Textarea = styled.textarea`
  width: 540px;
  height: 130px;
  padding: 16px;

  font-size: 14px;
  font-weight: 400;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  background-color: ${colors.gray50};
  outline: none;
  color: ${colors.gray};
  box-sizing: border-box;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }

  &[aria-invalid='true'] {
    border-color: ${colors.red};
  }
`

export default TextField
