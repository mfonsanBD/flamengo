import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 45rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    font-family: ${theme.font.family.googleSansMedium};
    z-index: ${theme.layers.base};
  `}
`

export const Select = styled.select`
  ${({ theme }) => css`
    appearance: none;
    color: ${theme.colors.darkGray};
    background-color: transparent;
    border: none;
    padding: 0 ${theme.spacings.small};
    margin: 0;
    width: 100%;
    height: 5.5rem;
    font-family: inherit;
    font-size: inherit;
    line-height: 1.1;
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: ${theme.layers.modal};

    &::-ms-expand {
      display: none;
    }
  `}
`

export const ArrowDown = styled.label`
  ${({ theme }) => css`
    width: 7rem;
    height: 5.5rem;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    z-index: ${theme.layers.menu};
  `}
`

export const Option = styled.option``
