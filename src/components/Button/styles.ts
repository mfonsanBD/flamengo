import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal' | 'side' | 'color'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  minimal: () => css`
    background: none;
    position: relative;
    padding: 0;
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,

  withIcon: () => css`
    svg {
      width: 2rem;
    }
  `,

  left: (theme: DefaultTheme) => css`
    span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `,

  right: (theme: DefaultTheme) => css`
    span {
      margin-right: ${theme.spacings.xxsmall};
    }
  `,

  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};

    &:after {
      background: ${theme.colors.red};
    }

    &:hover {
      color: ${darken(0.1, theme.colors.black)};

      &:after {
        background: ${darken(0.1, theme.colors.red)};
      }
    }
  `,

  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};

    &:after {
      background: ${theme.colors.white};
    }

    &:hover {
      color: ${darken(0.1, theme.colors.white)};

      &:after {
        background: ${darken(0.1, theme.colors.white)};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    minimal,
    hasIcon,
    disabled,
    side,
    color
  }) => css`
    background: ${theme.colors.red};
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    font-family: ${theme.font.family.googleSansMedium};
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${minimal ? 'none' : darken(0.1, theme.colors.red)};
    }

    &:after {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      top: ${theme.spacings.medium};
      display: block;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon()}
    ${!!minimal && wrapperModifiers.minimal()}
    ${!!side && wrapperModifiers[side](theme)}
    ${!!color && wrapperModifiers[color](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
