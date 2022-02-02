import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Image = styled.img`
  max-width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family.googleSansMedium};
  `}
`

export const description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family.googleSansMedium};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Error = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: 9rem;
    font-family: ${theme.font.family.montserrat};
  `}
`
