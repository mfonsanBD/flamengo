import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  overflow: hidden;
`

export const MenuSection = styled.section`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const BannerSection = styled.section`
  position: relative;
`

export const MatchsSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.xxlarge};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`

export const NewsSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xlarge};
  `}
`

export const AllNews = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${theme.spacings.small};
  `}
`

export const NewsArea = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${theme.spacings.small};
  `}
`

export const ButtonArea = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: center;
    z-index: ${theme.layers.menu};
  `}
`

export const SponsorsSection = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
  `}
`

export const FooterSection = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
    background-color: ${theme.colors.red};
  `}
`
