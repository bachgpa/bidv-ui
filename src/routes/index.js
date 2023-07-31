// LAYOUTs

import Personal from '../page/personal';
import Business from '../page/business';
import HeaderOnly from '../layout/HeaderOnly';
import DefaultLayout from '../layout/DefaultLayout';

const publicRoutes = [
   {
      path: '/',
      component: Personal,
      layout: DefaultLayout,
   },
   {
      path: '/business',
      component: Business,
      layout: HeaderOnly,
   },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
