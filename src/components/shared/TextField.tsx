import {
  FocusEventHandler,
  forwardRef,
  TextareaHTMLAttributes,
  useState,
} from 'react'

import Text from './Text'
import { colors } from '../styles/colorPalette'

interface TextFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode
  hasError?: boolean
  helpMessage?: React.ReactNode
  text?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, hasError, helpMessage, text, onFocus, onBlur, ...props },
    ref,
  ) {
    const [focused, setFocused] = useState(false)

    const labelColor = hasError ? 'red' : focused ? 'blue' : undefined

    const handleFocus: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      setFocused(true)
      onFocus?.(event)
    }

    const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      setFocused(false)
      onBlur?.(event)
    }

    return (
      <div>
        {label ? (
          <Text
            typography="t5"
            color={labelColor}
            display="inline-block"
            style={{ marginBottom: 6 }}
          >
            {label}
          </Text>
        ) : null}

        <textarea
          minLength={30}
          maxLength={500}
          placeholder="내용을 입력하세요.&#13;30자~500자 등록 가능"
          required
          value={text}
          wrap="hard"
          onBlur={handleBlur}
          onFocus={handleFocus}
          style={{
            width: '540px',
            height: '130px',
            padding: '20px',
            border: `1px solid ${colors.gray300}`,
            borderRadius: '5px',
            backgroundColor: colors.gray50,
            outline: 'none',
            color: colors.gray,
            fontSize: '14px',
            resize: 'none',
            boxSizing: 'border-box',
          }}
        />

        {helpMessage ? (
          <Text
            typography="t5"
            color={labelColor}
            display="inline-block"
            style={{ marginTop: 6, fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        ) : null}
      </div>
    )
  },
)

export default TextField
