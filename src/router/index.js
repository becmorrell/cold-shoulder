import { createRouter, createWebHistory } from 'vue-router'

import ExerciseDiary from '../views/ExerciseDiary.vue'
import HomeView from '../views/HomeView.vue'
import painScale from '../views/painScale.vue'
import weekAchievement from '../views/weeklyAchieved.vue'
import motivationQuote from '../views/motivation.vue'
import ROM from '../views/ROM.vue'



const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
        
      },
    {
        path: '/exerciseDiary',
        name: 'ExerciseDiary',
        component: ExerciseDiary
    },
    {
        path: '/painScale',
        name: 'painScale',
        component: painScale
    },
    {
      path: '/weeklyAchieved',
      name: 'weekAchievement',
      component: weekAchievement
    },
    {
      path: '/motivation',
      name: 'motivation',
      component: motivationQuote
  },
      {
        path: '/range',
        name: 'ROM',
        component: ROM
    }


]

   

const router = createRouter({
    mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
