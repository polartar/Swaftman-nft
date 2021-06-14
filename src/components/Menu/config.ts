import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Swap Aggregator'),
        href: 'https://swap.dexkit.com/#/matic/swap',
      },
      {
        label: t('V1'),
        href: 'https://swapmatic.io/swap',
      }
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/',
  },
  {
    label: t('Staking'),
    icon: 'PoolIcon',
    href: '/',
  },
  {
    label: t('NFT Shop'),
    icon: 'PredictionsIcon',
    href: '/',
  },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: t('Links'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('Overview'),
        href: '#',
      },
      {
        label: t('Tokens'),
        href: '#',
      },
      {
        label: t('Pairs'),
        href: '#',
      },
      {
        label: t('Accounts'),
        href: '#',
      },
    ],
  },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: t('More'),
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: t('Contact'),
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: t('Github'),
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //     {
  //       label: t('Merch'),
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
]

export default config
