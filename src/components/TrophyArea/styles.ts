import styled, { css } from 'styled-components'

import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.red};
    position: relative;

    ${media.lessThan('huge')`
      padding: 12rem ${theme.spacings.large};
    `}

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xlarge} ${theme.spacings.small};
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
      top: 35%
    `}

    ${media.lessThan('medium')`
      top: 30%
    `}

    ${LogoStyles.Wrapper} {
      svg {
        width: 52.2rem;
        height: 44rem;
      }
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.montserratBold};
    margin-bottom: ${theme.spacings.xlarge};

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.medium};
    `}

    span {
      font-family: ${theme.font.family.montserratRegular};
    }
  `}
`

export const TrophyGridArea = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.menu};
    margin-bottom: ${theme.spacings.xlarge};
  `}
`

export const ButtonArea = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: center;
    z-index: ${theme.layers.menu};
  `}
`
