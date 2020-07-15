
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/',
        name: 'home', 
        component: () => import('pages/Home.vue') 
      },
      { path: '/how',
        name: 'how', 
        component: () => import('pages/How.vue') 
      },
      { path: '/sample',
        name: 'sample', 
        component: () => import('pages/Sample.vue') 
      },
      { path: '/placeorder',
        name: 'placeorder', 
        component: () => import('pages/PlaceOrder.vue') 
      },          
      { path: '/contactus',
        name: 'contactus', 
        component: () => import('pages/ContactUs.vue') 
      },                   
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
