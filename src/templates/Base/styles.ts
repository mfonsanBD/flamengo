import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MenuSection = styled.section`
  width: 100%;
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
