import styled, { css, DefaultTheme } from 'styled-components'
import { BadgeProps } from '.'

type ColorProps = Pick<BadgeProps, 'color'>

const ColorModifiers = {
  red: (theme: DefaultTheme) => css`
    width: 14rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.red};
    text-transform: uppercase;
  `,
  white: (theme: DefaultTheme) => css`
    width: 10rem;
    color: ${theme.colors.red};
    background-color: ${theme.colors.white};
    text-transform: capitalize;
  `
}

export const Wrapper = styled.div<ColorProps>`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem ${theme.spacings.xsmall};

    font-size: ${theme.font.sizes.small};

    ${!!color && ColorModifiers[color!](theme)}
  `}
`
