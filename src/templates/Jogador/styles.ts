import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as LogoStyles from 'components/Logo/styles'

export const PlayerInfoSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.xxlarge};
    background-color: ${theme.colors.red};
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.lessThan('huge')`
      padding: 12rem ${theme.spacings.small};
    `}

    ${media.lessThan('medium')`
      padding: 12rem ${theme.spacings.medium};
    `}
  `}
`

export const LogoArea = styled.div`
  ${({ theme }) => css`
    opacity: 0.1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${theme.layers.base};

    ${media.lessThan('huge')`
      top: 59rem;
    `}

    ${media.lessThan('medium')`
      top: 98rem;
    `}

    ${LogoStyles.Wrapper} {
      svg {
        width: 52.2rem;
        height: 44rem;

        ${media.lessThan('medium')`
          width: 30rem;
          height: 30rem;
        `}
      }
    }
  `}
`
