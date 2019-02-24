import VueRouter from 'vue-router';
import Dash from './components/Dash.vue';
import Map from './components/Map.vue';
import About from './components/About.vue';
import Auth from './components/Auth.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dash },
    { path: '/map', component: Map },
    { path: '/about', component: About },
    { path: '/auth', component: Auth },
    { path: '*', redirect: '/' }
  ]
});