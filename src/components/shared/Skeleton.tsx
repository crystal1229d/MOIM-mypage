import styled, { keyframes } from 'styled-components'
import { colors } from '../styles/colorPalette'

const opacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`

const Skeleton = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${colors.gray};
  animation: ${opacity} 2s ease-in-out 0.5s infinite;
`

export default Skeleton
