import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem ${theme.spacings.xsmall};
    background-color: ${theme.colors.red};
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    text-transform: uppercase;
  `}
`
