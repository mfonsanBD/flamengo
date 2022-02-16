import styled, { css } from 'styled-components'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.montserratBold};
    color: ${theme.colors.black};
    font-weight: 700;
    text-transform: uppercase;

    span {
      color: ${theme.colors.red};
    }
  `}
`
