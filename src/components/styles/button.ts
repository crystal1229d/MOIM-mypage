import { css } from 'styled-components'
import { colors } from './colorPalette'

export const buttonColorMap = {
  positive: {
    styles: css`
      background-color: ${colors.blue};
      color: ${colors.white};
    `,
    textColor: colors.white,
  },
  negative: {
    styles: css`
      background-color: ${colors.red};
      color: ${colors.white};
    `,
    textColor: colors.white,
  },
  neutral: {
    styles: css`
      background-color: ${colors.white};
      color: ${colors.black};
    `,
    textColor: colors.black,
  },
}

export const buttonSizeMap = {
  small: css`
    width: 100px;
    height: 30px;
    font-size: 14px;
  `,
  medium: css`
    width: 300px;
    height: 40px;
    font-size: 14px;
  `,
  large: css`
    width: 100vw;
    height: 50px;
    font-size: 14px;
  `,
}

export type ButtonColor = keyof typeof buttonColorMap
export type ButtonSize = keyof typeof buttonSizeMap
