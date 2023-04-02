import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArmsViewVue from '@/views/ArmsView.vue'
import ChestViewVue from '@/views/ChestView.vue'
import BackViewVue from '@/views/BackView.vue'
import ShouldersViewVue from '@/views/ShouldersView.vue'
import PersonalRecordsViewVue from '@/views/PersonalRecordsView.vue'
import LegsView from '@/views/LegsView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home',component: HomeView },
    {path: '/arms', name: 'arms',component: ArmsViewVue },
    {path: '/chest', name: 'chest',component: ChestViewVue },
    {path: '/back', name: 'back',component: BackViewVue },
    {path: '/shoulders', name: 'shoulders',component: ShouldersViewVue },
    {path: '/personalrecords', name: 'personalrecords',component: PersonalRecordsViewVue },
    {path: '/legs', name: 'legs',component: LegsView },
 
    {
    
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})


export default router


