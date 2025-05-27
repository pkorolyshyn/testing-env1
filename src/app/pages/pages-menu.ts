import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Dialog',
    icon: 'browser-outline',
    link: '/pages/modal-overlays/dialog',
  },
  {
    title: 'Calendar',
    icon: 'message-circle-outline',
    link: '/pages/extra-components/calendar',
  },
  {
    title: 'Echarts',
    icon: 'pie-chart-outline',
    link: '/pages/charts/echarts',
  },
  {
    title: 'Smart Table',
    icon: 'grid-outline',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
    ],
  },
];
