import { keyframes } from 'styled-components'

export const barAnimationOpenTop = keyframes`
  0% {
    transform: rotate(0) translateY(0);
  }
  50% {
    transform: rotate(0) translateY(6px);
  }
  100% {
    transform: rotate(45deg) translateY(6px) translateX(6px);
  }
`

export const barAnimationOpenBottom = keyframes`
  0% {
    transform: rotate(0) translateY(0);
  }
  50% {
    transform: rotate(0) translateY(-6px);
  }
  100% {
    transform: rotate(-45deg) translateY(-6px) translateX(6px);
  }
`

export const barAnimationCloseTop = keyframes`
  0% {
    transform: rotate(45deg) translateY(6px) translateX(6px);
  }
  50% {
    transform: rotate(0) translateY(6px);
  }
  100% {
    transform: rotate(0) translateY(0);
  }
`

export const barAnimationCloseBottom = keyframes`
  0% {
    transform: rotate(-45deg) translateY(-6px) translateX(6px);
  }
  50% {
    transform: rotate(0) translateY(-6px);
  }
  100% {
    transform: rotate(0) translateY(0);
  }
`
