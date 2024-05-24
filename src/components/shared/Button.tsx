import styled, { css } from 'styled-components'
import {
  ButtonColor,
  ButtonSize,
  buttonColorMap,
  buttonSizeMap,
} from '../styles/button'
import { colors } from '../styles/colorPalette'

interface BaseButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  disabled?: boolean
  withshadow?: boolean
}

interface ButtonProps extends BaseButtonProps {
  label: string
}

const BaseButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['withshadow'].includes(prop),
})<BaseButtonProps>`
  cursor: pointer;
  font-weight: 400;
  border-radius: 5px;

  &: hover {
    opacity: 0.8;
  }

  ${({ color = 'positive' }) => buttonColorMap[color].styles};
  ${({ size = 'small' }) => buttonSizeMap[size]};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.25;
      cursor: not-allowed;
    `};
  ${({ withshadow }) =>
    withshadow &&
    css`
      box-shadow: 0px 4px 15px 0px ${colors.grayForShadow};
    `};
`

const Button = ({ label, color, ...props }: ButtonProps) => (
  <BaseButton color={color} {...props}>
    <p {...props}>{label}</p>
  </BaseButton>
)

export default Button
