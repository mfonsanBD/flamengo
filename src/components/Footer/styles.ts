import styled, { css } from 'styled-components'

import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  overflow: hidden;

  ${LogoStyles.Wrapper} {
    text-align: center;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    justify-content: space-between;
    align-items: center;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${media.greaterThan('medium')`
        float: right;
      `}
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    text-align: center;

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.medium};
      text-align: left;
    `}
  `}
`
