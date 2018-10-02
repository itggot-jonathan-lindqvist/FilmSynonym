import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Throttler from './views/throttler.vue'
import Movie from './views/movie.vue'
import MovieOld from './views/Movie.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/movie',
      name: 'movieOld',
      component: MovieOld
    },
    {
      path: '/throttler',
      name: 'throttler',
      component: Throttler
    },
  ]
})
