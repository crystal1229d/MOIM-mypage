import styled from 'styled-components'
import { colors } from '../styles/colorPalette'

const Textarea = styled.textarea`
  width: 540px;
  height: 130px;
  padding: 16px;

  font-size: 15px;
  font-weight: 500;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }

  &[aria-invalid='true'] {
    border-color: ${colors.red};
  }
`

export default Textarea
