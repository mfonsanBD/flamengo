import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
    grid-gap: ${theme.spacings.small};
  `}
`
