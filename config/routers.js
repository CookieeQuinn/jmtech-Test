export const menuRouter = [
  {
    title: 'Welcome',
    name: 'Welcome',
    path: '/',
    component: 'index',
    icon: {
      normal: 'welcome',
      active: 'welcomeSelected',
    },
  },
  {
    title: 'About',
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
    icon: {
      normal: 'userList',
      active: 'userListSelected',
    },
  },
  {
    title: 'User Info',
    path: '/user/:id',
    component: 'user',
    hideInMenu: true,
  },
];

export default [
  // {
  //   title: 'Login',
  //   path: '/login',
  //   name: 'login',
  //   component: 'Login',
  // },
  {
    title: 'Welcome',
    path: '/',
    component: '../layouts/BasicLayout/BasicLayout',
    routes: menuRouter,
  },
];
