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
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family.montserratBold};
    text-transform: uppercase;
    line-height: 1;
  `}
`

export const description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.googleSansRegular};
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.medium};
  `}
`

export const Error = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: 9rem;
    font-family: ${theme.font.family.montserratBold};
  `}
`
