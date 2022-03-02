import { Story, Meta } from '@storybook/react'
import PlayerCard, { PlayerCardProps } from '.'

export default {
  title: 'PlayerCard',
  component: PlayerCard,
  args: {
    floatImage: '/img/player/gabigol.png',
    number: '9',
    name: 'Gabriel Barbosa',
    buttonLabel: 'Ficha do Jogador',
    buttonLink: '/gabriel-barbosa'
  }
} as Meta

export const Default: Story<PlayerCardProps> = (args) => (
  <div style={{ maxWidth: '37.5rem', maxHeight: '45rem' }}>
    <PlayerCard {...args} />
  </div>
)
