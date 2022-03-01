import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as GridStyles from 'components/Grid'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  overflow: hidden;
`

export const MenuSection = styled.section`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    padding: ${theme.spacings.xsmall};
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const BannerSection = styled.section`
  position: relative;
`

export const MatchsSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.xxlarge};

    ${media.lessThan('huge')`
      padding: 12rem ${theme.spacings.large};
    `}

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xlarge} ${theme.spacings.small};
    `}

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xlarge};

      ${media.lessThan('medium')`
        margin-bottom: ${theme.spacings.medium};
      `}
    }
  `}
`

export const NewsSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xlarge};

    ${media.lessThan('huge')`
      padding: 12rem ${theme.spacings.large};
    `}

    ${media.lessThan('medium')`
      gap: 0;
      padding: ${theme.spacings.xlarge} ${theme.spacings.small};
    `}

    ${media.lessThan('medium')`
      ${HeadingStyles.Wrapper} {
        margin-bottom: 0;
      }
    `}
  `}
`

export const FlaTVSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.black};

    ${GridStyles.Grid} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: ${theme.spacings.small};
      margin-top: 15rem;
    }

    ${media.lessThan('huge')`
      padding: 12rem ${theme.spacings.large};
    `}

    ${media.lessThan('medium')`
      gap: ${theme.spacings.xlarge};
      padding: ${theme.spacings.xlarge} ${theme.spacings.small};

      ${GridStyles.Grid} {
        flex-direction: column;
        margin-top: 0;
      }
    `}
  `}
`

export const AllNews = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.small};
    grid-template-columns: 1fr 1fr;

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      padding: ${theme.spacings.xlarge} 0;
    `}
  `}
`

export const NewsArea = styled.div``

export const ButtonArea = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: center;
    z-index: ${theme.layers.menu};
  `}
`

export const FlaTVLogo = styled.img`
  height: 6rem;
  width: 17.7rem;

  ${media.lessThan('medium')`
    height: 4rem;
    width: 11rem;
  `}
`

export const SponsorsSection = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};

    ${media.lessThan('huge')`
      padding: ${theme.spacings.medium} ${theme.spacings.large};
    `}
  `}
`

export const FooterSection = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
    background-color: ${theme.colors.red};

    ${media.lessThan('huge')`
      padding: ${theme.spacings.medium} ${theme.spacings.large};
    `}
  `}
`
