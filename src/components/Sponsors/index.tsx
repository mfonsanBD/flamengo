import * as S from './styles'

export type BrandData = {
  brand: string
  name: string
}

export type SponsorsProps = {
  item: BrandData[]
}

const Sponsors = ({ item }: SponsorsProps) => (
  <S.Wrapper>
    {!!item &&
      item.map((item, index) => (
        <S.Brand
          src={item.brand}
          key={index}
          aria-label={item.name}
          className={item.name}
        />
      ))}
  </S.Wrapper>
)

export default Sponsors
