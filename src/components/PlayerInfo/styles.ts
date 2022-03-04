import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;
`

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 230px;
    background-color: ${theme.colors.white};
  `}
`
