import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { MainNewsProps } from '.'

type WrapperProps = Pick<MainNewsProps, 'mode'>
type CoverProps = Pick<MainNewsProps, 'cover'>

const wrapperModifiers = {
  horizontal: (theme: DefaultTheme) => css`
    display: flex;
    height: 32rem;

    ${media.greaterThan('medium')`
      height: 32.9rem;
    `}

    ${Cover} {
      height: 50rem;
      background-position: bottom center;
    }

    ${Content} {
      position: relative;
      bottom: 0;
      top: ${theme.spacings.medium};

      ${media.greaterThan('medium')`
        width: 40rem;
        top: ${theme.spacings.large};
      `}

      ${media.greaterThan('huge')`
        width: 90rem;
      `}
    }
  `,
  vertical: (theme: DefaultTheme) => css`
    position: relative;
    height: 32rem;

    ${media.greaterThan('medium')`
      height: 69.4rem;
    `}

    ${Cover} {
      background-position: bottom center;

      ${media.greaterThan('medium')`
        background-position: top center;
      `}
    }

    ${Content} {
      position: absolute;
      bottom: ${theme.spacings.medium};

      ${media.greaterThan('medium')`
        bottom: ${theme.spacings.xlarge};
      `}
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, mode }) => css`
    ${!!mode && wrapperModifiers[mode](theme)}
  `}
`

export const Cover = styled.div<CoverProps>`
  ${({ theme, cover }) => css`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${cover});
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: ${theme.colors.black};
      opacity: 0.7;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.medium};
    word-wrap: break-word;
  `}
`

export const Badge = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.large};
    text-transform: uppercase;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.montserratBold};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.medium};
    `}
  `}
`
