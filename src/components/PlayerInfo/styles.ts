import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 12rem;

    ${media.lessThan('medium')`
      flex-direction: column-reverse;
      gap: ${theme.spacings.xlarge};
    `}
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 230px;
    background-color: ${theme.colors.white};

    ${media.lessThan('medium')`
      width: 100%;
      height: 1px;
    `}
  `}
`
