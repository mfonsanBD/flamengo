import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const TrophyGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.xxlarge};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    ${media.lessThan('huge')`
      grid-template-columns: 1fr 1fr 1fr;
    `}

    ${media.lessThan('medium')`
      grid-template-columns: 1fr 1fr;
      grid-gap: ${theme.spacings.large};
    `}
  `}
`
