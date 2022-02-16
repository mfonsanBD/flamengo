import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.small};
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

    ${media.lessThan('huge')`
      grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
    `}

    ${media.lessThan('medium')`
      grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
    `}
  `}
`
