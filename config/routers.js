export const menuRouter = [
  {
    title: '案例',
    name: 'Welcome',
    path: '/',
    exact: true,
    component: 'index',
    icon: {
      normal: 'welcome',
      active: 'welcomeSelected',
    },
  },
  {
    title: '关于我们',
    name: 'About',
    path: '/about',
    component: 'about',
    icon: {
      normal: 'about',
      active: 'aboutSelected',
    },
  },
  {
    title: 'User List',
    name: 'User List',
    path: '/user',
    component: 'userList',
    hideInMenu: true,
    icon: {
      normal: 'userList',
      active: 'userListSelected',
    },
  },
  {
    title: 'EN',
    // path: '/user/:id',
    // component: 'user',
    // hideInMenu: true,
  },
];

export default [
  {
    title: 'Welcome',
    path: '/',
    component: '../layouts',
    // component: '../layouts/BasicLayout/BasicLayout',
    routes: menuRouter,
  },
];
