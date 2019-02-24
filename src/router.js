import VueRouter from 'vue-router';
import Dash from './components/Dash.vue';
import Map from './components/Map.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dash },
    { path: '/map', component: Map },
    { path: '*', redirect: '/' }
  ]
});