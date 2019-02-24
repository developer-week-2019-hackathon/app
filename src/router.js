import VueRouter from 'vue-router';
import Dash from './components/Dash.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dash },
    { path: '*', redirect: '/' }
  ]
});