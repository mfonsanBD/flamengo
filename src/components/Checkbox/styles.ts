import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

type WrapperProps = Pick<CheckboxProps, 'labelColor'>

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.lightGray};
    border-radius: 0.2rem;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.red};
    }

    &:hover {
      border-color: ${theme.colors.red};
      transition: ${theme.transition.fast};
    }

    &:checked {
      border-color: ${theme.colors.red};
      background: ${theme.colors.red};
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<WrapperProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    line-height: 1.8rem;
  `}
`
