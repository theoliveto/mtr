import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastrosView from '@/views/CadastrosVIew.vue'
import DevView from '@/views/DevView.vue'
import SuporteView from '@/views/SuporteView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/cadastros', name: 'cadastros', component: CadastrosView },
  { path: '/desenvolvimento', name: 'desenvolvimento', component: DevView },
  { path: '/suporte', name: 'suporte', component: SuporteView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
