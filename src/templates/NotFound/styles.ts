import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.black};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xxlarge};
    `}
  `}
`
