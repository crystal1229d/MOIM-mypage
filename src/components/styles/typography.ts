import { css } from 'styled-components'

export const typographyMap = {
  t1: css`
    font-size: 28px;
    line-height: 28px;
  `,
  t2: css`
    font-size: 20px;
    line-height: 20px;
  `,
  t3: css`
    font-size: 18px;
    line-height: 18px;
  `,
  t4: css`
    font-size: 16px;
    line-height: 16px;
  `,
  t5: css`
    font-size: 14px;
    line-height: 14px;
  `,
}

export type Typography = keyof typeof typographyMap
