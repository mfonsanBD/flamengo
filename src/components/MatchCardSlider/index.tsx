/* eslint-disable @next/next/no-img-element */
import Slider, { SliderSettings } from 'components/Slider'
import MatchCard, { MatchCardProps } from 'components/MatchCard'

import * as S from './styles'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <img src="/img/arrow-right.svg" aria-label="next match" />,
  prevArrow: <img src="/img/arrow-left.svg" aria-label="previous match" />
}

export type MatchCardSliderProps = {
  items: MatchCardProps[]
}

const MatchCardSlider = ({ items }: MatchCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <MatchCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default MatchCardSlider
