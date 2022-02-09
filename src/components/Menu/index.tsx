import { useState } from 'react'
import Link from 'next/link'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

export type MenuProps = {
  backgroundColor?: 'white' | 'transparent'
}

const Menu = ({ backgroundColor = 'transparent' }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper backgroundColor={backgroundColor}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>

        <S.LogoWrapper>
          <Link href="/" passHref>
            <a>
              <Logo size="small" />
            </a>
          </Link>
        </S.LogoWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/equipe" passHref>
            <S.MenuLink>Equipe</S.MenuLink>
          </Link>

          <Link href="/calendario-resultados" passHref>
            <S.MenuLink>Calendário&Resultados</S.MenuLink>
          </Link>

          <S.LogoWrapper>
            <Link href="/" passHref>
              <a>
                <Logo />
              </a>
            </Link>
          </S.LogoWrapper>

          <Link href="/classificacao" passHref>
            <S.MenuLink>Classificação</S.MenuLink>
          </Link>

          <Link href="/titulos" passHref>
            <S.MenuLink>Títulos</S.MenuLink>
          </Link>

          <Link href="/noticias" passHref>
            <S.MenuLink>Notícias</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <Link href="/equipe" passHref>
            <S.MenuLink>Equipe</S.MenuLink>
          </Link>

          <Link href="/calendario-resultados" passHref>
            <S.MenuLink>Calendário&Resultados</S.MenuLink>
          </Link>

          <Link href="/classificacao" passHref>
            <S.MenuLink>Classificação</S.MenuLink>
          </Link>

          <Link href="/titulos" passHref>
            <S.MenuLink>Títulos</S.MenuLink>
          </Link>

          <Link href="/noticias" passHref>
            <S.MenuLink>Notícias</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
