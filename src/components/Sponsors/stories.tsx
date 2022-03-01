import { Story, Meta } from '@storybook/react'
import Sponsors, { SponsorsProps } from '.'

export default {
  title: 'Sponsors',
  component: Sponsors,
  args: {
    item: [
      {
        brand: '/img/sponsors/adidas.svg',
        name: 'Adidas'
      },
      {
        brand: '/img/sponsors/brb.svg',
        name: 'BRB'
      },
      {
        brand: '/img/sponsors/eletrobras.svg',
        name: 'Eletrobras'
      },
      {
        brand: '/img/sponsors/havan.svg',
        name: 'Havan'
      },
      {
        brand: '/img/sponsors/mercado-livre.svg',
        name: 'Mercado Livre'
      },
      {
        brand: '/img/sponsors/pixbet.svg',
        name: 'Pixbet'
      },
      {
        brand: '/img/sponsors/tim.svg',
        name: 'Tim'
      }
    ]
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta

export const Default: Story<SponsorsProps> = (args) => <Sponsors {...args} />
