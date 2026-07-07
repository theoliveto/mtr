import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastrosView from '@/views/CadastrosVIew.vue'
import DevView from '@/views/DevView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/cadastros', name: 'cadastros', component: CadastrosView },
  { path: '/desenvolvimento', name: 'desenvolvimento', component: DevView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
