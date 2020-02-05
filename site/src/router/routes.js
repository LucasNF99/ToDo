
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/boards',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/nh-tracking', name: 'nhtracking', component: () => import('pages/board.vue') },
      { path: '/fatec', name: 'fatec', component: () => import('pages/board.vue') },
      { path: '/projects', name: 'projects', component: () => import('pages/board.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
