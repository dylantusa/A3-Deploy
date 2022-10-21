import { createRouter, createWebHistory } from 'vue-router' 

const routes = [ 
  { 
    path: '/', 
    name: 'List', 
    component: () => import('../components/ListPage') 
  }, 
  { 
    path: '/create', 
    name: 'Create', 
    component: () => import('../components/CreatePage')
  }, 
  { 
    path: '/edit/vM9D8GNYDuokpuDPtMQO', 
    name: 'edit', component: () => import('../components/EditPage') 
  } 
] 

const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL), 
  routes 
}) 

export default router