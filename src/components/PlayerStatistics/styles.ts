import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 49rem;
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacings.large} ${theme.spacings.xxlarge};
    justify-content: center;
    align-items: center;

    ${media.lessThan('medium')`
    `}
  `}
`

export const Statistic = styled.div`
  ${({ theme }) => css`
    text-align: center;

    h4 {
      margin-top: ${theme.spacings.xxsmall};
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-family: ${theme.font.family.montserratBold};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
