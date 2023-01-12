import { iNavItem } from '../libs/interfaces/NavItem.interface';

export const nav: iNavItem[] = [
  {
    id: 1,
    to: '/',
    label: 'home',
  },
  {
    id: 2,
    to: '/products-pag',
    label: 'paginated products',
  },
  {
    id: 3,
    to: '/products-inf',
    label: 'infinite products',
  },
];
