/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRef } from 'react'

import SlickSlider from 'react-slick'
import Slider, { SliderSettings } from 'components/Slider'

// import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import { ArrowNarrowRight } from '@styled-icons/heroicons-outline/ArrowNarrowRight'

import * as S from './styles'

const commonSettings: SliderSettings = {
  arrows: false,
  infinite: false,
  lazyLoad: 'ondemand',
  swipe: false
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 3
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type BannerImageProps = {
  src: string
  label: string
  title: string
  slug: string
}

export type BannerProps = {
  items: BannerImageProps[]
}

const Banner = ({ items }: BannerProps) => {
  const slider = useRef<SlickSlider>(null)
  const sliderContent = useRef<SlickSlider>(null)

  return (
    <S.Wrapper>
      <S.Thambs>
        <Slider ref={slider} settings={settings}>
          {items.map((item, index) => (
            <img
              role="button"
              key={`thumb-${index}`}
              src={item.src}
              alt={`Thamb - ${item.label}`}
              onClick={() => {
                slider.current!.slickGoTo(index, true)
                sliderContent.current!.slickGoTo(index, true)
              }}
            />
          ))}
        </Slider>
      </S.Thambs>

      <S.Content>
        <Slider ref={sliderContent} settings={modalSettings}>
          {items.map((item, index) => (
            <div key={`gallery-${index}`}>
              <S.Label>Time Principal</S.Label>
              <S.Title>{item.title}</S.Title>
              <Link href={`/${item.slug}`} passHref>
                <a>
                  <ArrowNarrowRight size={35} />
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      </S.Content>

      <S.Overlay />

      <Slider ref={slider} settings={modalSettings}>
        {items.map((item, index) => (
          <div key={`gallery-${index}`}>
            <S.BannerWrapper>
              <img src={item.src} alt={item.label} />
            </S.BannerWrapper>
          </div>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Banner
