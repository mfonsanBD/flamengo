import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    ${media.lessThan('medium')`
      gap: ${theme.spacings.medium};
      justify-content: center;
    `}

    .Tim {
      height: 3rem;
    }
    .Havan,
    .Eletrobras,
    .Adidas {
      height: 5rem;
    }
  `}
`

export const Brand = styled.img`
  ${({ theme }) => css`
    height: 4rem;

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.medium};
    `}
  `}
`
