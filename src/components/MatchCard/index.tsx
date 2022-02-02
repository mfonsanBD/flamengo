import { Ticket } from '@styled-icons/ionicons-outline/Ticket'

import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type MatchCardProps = {
  date: string
  match: string
  homeBrand: string
  homeName: string
  guestBrand: string
  guestName: string
  hour: string
  stadium: string
}

const MatchCard = ({
  date,
  match,
  homeBrand,
  homeName,
  guestBrand,
  guestName,
  hour,
  stadium
}: MatchCardProps) => (
  <S.Wrapper>
    <S.MatchDate>{date}</S.MatchDate>
    <S.Match>{match}</S.Match>

    <S.MatchCardContent>
      <S.Club>
        <S.ClubBrand src={homeBrand} alt={homeName} role="image" />
        <S.ClubName>{homeName}</S.ClubName>
      </S.Club>

      <MediaMatch greaterThan="medium">
        <S.Hour>{hour}</S.Hour>
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <S.VS>x</S.VS>
      </MediaMatch>

      <S.Club>
        <S.ClubBrand src={guestBrand} alt={guestName} role="image" />
        <S.ClubName>{guestName}</S.ClubName>
      </S.Club>
    </S.MatchCardContent>

    <S.MatchCardFooter>
      <S.Stadium>{stadium}</S.Stadium>
      <Button size="medium" icon={<Ticket />} side="left">
        Compre já o seu ingresso
      </Button>
    </S.MatchCardFooter>
  </S.Wrapper>
)

export default MatchCard
