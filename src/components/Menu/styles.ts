import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { MenuProps } from '.'

type WrapperProps = Pick<MenuProps, 'backgroundColor'>

const wrapperModifiers = {
  white: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};

    ${media.lessThan('medium')`
      height: 7rem;

      ${IconWrapper} {
        top: ${theme.spacings.small};
        color: ${theme.colors.black};
      }
    `}

    ${MenuLink} {
      color: ${theme.colors.black};
    }

    ${LogoWrapper} {
      svg {
        fill: ${theme.colors.red};
      }
    }
  `,
  transparent: (theme: DefaultTheme) => css`
    background-color: transparent;

    ${MenuLink} {
      color: ${theme.colors.white};
    }
  `
}

export const Wrapper = styled.menu<WrapperProps>`
  ${({ theme, backgroundColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    z-index: ${theme.layers.menu};
    ${!!backgroundColor && wrapperModifiers[backgroundColor](theme)}
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 50%;
      top: ${theme.spacings.xxsmall};
      transform: translateX(-50%);
      margin: 0;
    `}
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`

export const MenuNav = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    margin: 0 auto;
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.red};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: ${theme.layers.alwaysOnTop};
    overflow: hidden;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-top: 5rem;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: 700;
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.small};

      transition: transform 0.3s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    }
  `}
`
