import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 45rem;
    background-color: ${theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`

export const Apelido = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-family: ${theme.font.family.montserratBold};
    position: absolute;
    font-size: 20rem;
    text-align: center;
    line-height: 0.8;
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(33, 33, 33, 0) 30%,
      rgba(33, 33, 33, 1) 100%
    );
    z-index: ${theme.layers.overlay};
  `}
`

export const Imagem = styled.img`
  position: absolute;
  bottom: 0;
`
