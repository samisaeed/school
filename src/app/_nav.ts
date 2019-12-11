import { INavData } from '../../dist/@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Setup Components'
  },
  {
    name: 'SetUp',
    url: '/setup',
    icon: 'icon-settings',
    children: [
      {
        name: 'Division',
        url: '/setup/divisions',
        icon: 'icon-star'
      }
      ]}
];
