
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index.vue') 
      },
      { 
        path: 'typography',
        name: 'Typo',
        component: () => import('pages/TypoPage.vue') 
      },
      { 
        path: 'flex',
        name: 'Flex',
        component: () => import('pages/flex.vue') 
      },
      { 
        path: 'dialogs',
        name: 'Dialogs',
        component: () => import('pages/Dialogs.vue') 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
