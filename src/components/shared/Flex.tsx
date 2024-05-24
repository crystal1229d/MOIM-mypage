import styled from 'styled-components'
import { CSSProperties } from 'react'

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  dir?: CSSProperties['flexDirection']
  gap?: CSSProperties['gap']
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  flex-direction: ${({ dir = 'row' }) => dir};
  gap: ${({ gap = '0px' }) => gap};
`

export default Flex
