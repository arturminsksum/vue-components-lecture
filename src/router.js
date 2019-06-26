import Vue from 'vue';
import Router from 'vue-router';
import User from './views/user/User.vue';
import Quotes from './views/quotes/Quotes.vue';
import Progress from './views/progress/Progress.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: User,
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes,
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
