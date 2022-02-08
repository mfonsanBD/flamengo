import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div``

export const MenuSection = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const BannerSection = styled.div`
  position: relative;
`

export const MatchsSection = styled.div`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.xxlarge};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`

export const SponsorsSection = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
  `}
`

export const FooterSection = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
    background-color: ${theme.colors.red};
  `}
`
