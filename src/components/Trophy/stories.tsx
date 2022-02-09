import { Story, Meta } from '@storybook/react'
import Trophy, { TrophyProps } from '.'

export default {
  title: 'Trophy',
  component: Trophy,
  args: {
    trophy: '/img/carioca.png',
    trophySize: 'small',
    nameTop: 'Campeonato',
    nameBottom: 'Carioca',
    wins: 37
  },
  parameters: {
    backgrounds: {
      default: 'red'
    }
  }
} as Meta

export const Default: Story<TrophyProps> = (args) => <Trophy {...args} />
