import styled, { css } from 'styled-components'
import { TrophyProps } from '.'

type TrophySizeProps = Pick<TrophyProps, 'trophySize'>

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  justify-content: center;
`

const trophyModifiers = {
  small: () => css`
    height: 9rem;
  `,
  medium: () => css`
    height: 10.3rem;
  `,
  large: () => css`
    height: 13rem;
  `
}

export const Trophy = styled.img<TrophySizeProps>`
  ${({ trophySize }) => css`
    ${!!trophySize && trophyModifiers[trophySize]}
  `}
`

export const Content = styled.div``

export const Wins = styled.h2`
  ${({ theme }) => css`
    align-items: flex-end;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family.montserratBold};
    height: 6.5rem;
    margin: 0;
    padding: 0;
  `}
`

export const Name = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.googleSansMedium};
    margin: 0;
    padding: 0;
  `}
`
