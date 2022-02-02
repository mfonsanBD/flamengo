import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    svg {
      width: 5rem;
      height: 5rem;
    }
  `,

  normal: () => css`
    svg {
      width: 7rem;
      height: 7rem;
    }
  `,

  large: () => css`
    svg {
      width: 10rem;
      height: 10rem;
    }
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    ${!!size && wrapperModifiers[size]};

    svg {
      fill: ${theme.colors[color!]};
    }
  `}
`
