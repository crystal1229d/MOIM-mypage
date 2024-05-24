import { CSSProperties } from 'react'
import styled from 'styled-components'
import { colors, Colors } from '../styles/colorPalette'
import { Typography, typographyMap } from '../styles/typography'

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}

const getTypographyStyles = (typography: Typography) => {
  return typographyMap[typography] || typographyMap['t5']
}

const Text = styled.span.withConfig({
  shouldForwardProp: (prop) => !['bold'].includes(prop),
})<TextProps>`
  color: ${(props) => colors[props.color || 'black']};
  display: ${(props) => props.display || 'inline'};
  text-align: ${(props) => props.textAlign || 'left'};
  font-weight: ${(props) => (props.bold ? '700' : props.fontWeight || '400')};
  ${(props) => getTypographyStyles(props.typography || 't5')};
`

export default Text
