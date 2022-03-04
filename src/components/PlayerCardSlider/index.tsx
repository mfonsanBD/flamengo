/* eslint-disable @next/next/no-img-element */
import Slider, { SliderSettings } from 'components/Slider'
import PlayerCard, { PlayerCardProps } from 'components/PlayerCard'

import * as S from './styles'

type ArrowsProps = React.HTMLAttributes<HTMLDivElement>

const ArrowRight = (props: ArrowsProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src="/img/arrow-right.svg" aria-label="next match" />
    </div>
  )
}

const ArrowLeft = (props: ArrowsProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src="/img/arrow-left.svg" aria-label="previous match" />
    </div>
  )
}

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
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />
}

export type PlayerCardSliderProps = {
  items: PlayerCardProps[]
}

const PlayerCardSlider = ({ items }: PlayerCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <PlayerCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default PlayerCardSlider
