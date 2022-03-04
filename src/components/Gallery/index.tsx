/* eslint-disable @next/next/no-img-element */
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

import { IosArrowLeft as ArrowLeft } from '@styled-icons/fluentui-system-filled/IosArrowLeft'
import { IosArrowRight as ArrowRight } from '@styled-icons/fluentui-system-filled/IosArrowRight'
import { PlayerBannerProps } from 'components/PlayerBanner'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 1,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 450,
      settings: {
        arrows: false
      }
    }
  ],
  nextArrow: <ArrowRight size={40} color="#FAFAFA" />,
  prevArrow: <ArrowLeft size={40} color="#FAFAFA" />
}

export type GalleryProps = {
  images: string[]
} & Pick<PlayerBannerProps, 'apelido'>

const Gallery = ({ images, apelido }: GalleryProps) => (
  <S.Wrapper>
    <S.Cover>
      <Slider settings={settings}>
        {images.map((item, index) => (
          <S.Image key={index} src={item} aria-label="player gallery" />
        ))}
      </Slider>
    </S.Cover>

    <S.RightSide>
      <S.ClubAndPlayerNames>
        <p>
          Clube de Regatas do Flamengo / <span>{apelido}</span>
        </p>
      </S.ClubAndPlayerNames>
      <S.SliderArrows></S.SliderArrows>
    </S.RightSide>
  </S.Wrapper>
)

export default Gallery
