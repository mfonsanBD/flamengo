import styled, { css } from 'styled-components'
import { NewsCardProps } from '.'

type CoverProps = Pick<NewsCardProps, 'cover'>

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${theme.colors.white};
  `}
`

export const Cover = styled.div<CoverProps>`
  ${({ cover }) => css`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 13.7rem;
    background-image: url(${cover});
    background-size: cover;
    background-position: bottom center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const Date = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.montserratBold};
    margin-bottom: ${theme.spacings.xxsmall};
    text-transform: uppercase;
  `}
`

export const Desciption = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.mediumGray};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    font-family: ${theme.font.family.googleSansMedium};
  `}
`
