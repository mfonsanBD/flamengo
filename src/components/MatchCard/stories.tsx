import { Story, Meta } from '@storybook/react'
import MatchCard, { MatchCardProps } from '.'

export default {
  title: 'MatchCard',
  component: MatchCard,
  args: {
    date: 'Domingo, 06 de Fevereiro de 2022',
    match: 'Campeonato Carioca - 4ª rodada',
    homeBrand: '/img/emblema.svg',
    homeName: 'Flamengo',
    guestBrand: '/img/escudo-placeholder.svg',
    guestName: 'Visitante',
    hour: '20:00',
    stadium: 'Maracanã'
  }
} as Meta

export const Default: Story<MatchCardProps> = (args) => (
  <div style={{ width: '38.2rem' }}>
    <MatchCard {...args} />
  </div>
)
