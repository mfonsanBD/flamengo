import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background: ${theme.colors.white};
  `}
`

export const MatchDate = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `}
`

export const Match = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family.montserratBold};
    text-transform: uppercase;
  `}
`

export const MatchCardContent = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const Club = styled.div`
  text-align: center;
`

export const ClubBrand = styled.img`
  height: 4.5rem;
`

export const ClubName = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.montserratBold};
  `}
`

export const Hour = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family.montserratBold};
    margin: 0;
    border-radius: 5px;
  `}
`

export const VS = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family.montserratBold};
    margin: 0;
  `}
`

export const MatchCardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Stadium = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family.montserratBold};
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
