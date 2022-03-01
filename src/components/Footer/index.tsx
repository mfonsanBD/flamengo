import Logo from 'components/Logo'
import {
  FacebookSquare as Facebook,
  Youtube,
  Instagram,
  Twitter,
  Tiktok
} from '@styled-icons/boxicons-logos'

import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column aria-label="contact">
        <Logo color="white" size="small" />

        <S.Copyright>
          Clube de Regatas do Flamengo {currentYear} © Copyright.
        </S.Copyright>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <nav id="social-media">
          <a
            href="https://www.facebook.com/FlamengoOficial/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            <Facebook size={35} />
          </a>
          <a
            href="https://twitter.com/Flamengo"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            <Twitter size={35} />
          </a>
          <a
            href="https://www.instagram.com/flamengo/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            <Instagram size={35} />
          </a>
          <a
            href="https://www.youtube.com/user/flamengo/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            <Youtube size={35} />
          </a>
          <a
            href="https://www.tiktok.com/@flamengo"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            <Tiktok size={35} />
          </a>
        </nav>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer
