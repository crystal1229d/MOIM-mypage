import { css } from 'styled-components'

export const colorPalette = css`
  :root {
    --white: rgba(255, 255, 255, 1);
    --black: rgba(34, 34, 34, 1);
    --black800: rgba(68, 68, 68, 1);

    --gray: rgba(102, 102, 102, 1);
    --gray50: rgba(253, 253, 253, 1);
    --gray300: rgba(187, 187, 187, 1);

    --grayForShadow: rgba(194, 194, 194, 0.4);

    --blue: rgba(139, 174, 239, 1);
    --red: rgba(249, 167, 167, 1);

    --grayishBlue: rgba(146, 168, 209, 1);
  }
`

export const colors = {
  white: 'var(--white)',
  black: 'var(--black)',
  black800: 'var(--black800)',

  gray: 'var(--gray)',
  gray50: 'var(--gray50)',
  gray300: 'var(--gray300)',

  grayForShadow: 'var(--grayForShadow)',

  blue: 'var(--blue)',
  red: 'var(--red)',

  grayishBlue: 'var(--grayishBlue)',
}

export type Colors = keyof typeof colors
