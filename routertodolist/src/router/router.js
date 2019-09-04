import Vue from 'vue';
import Router from 'vue-router';

import welcome from '../components/welcome.vue'
import index from '../components/index.vue'
import personal from '../components/personal.vue'
import todolist from '../components/todolist.vue'

Vue.use(Router);

const routes = [
    { path: '/welcome', component: welcome },
    { path: '/index', component: index },
    { path: '/personal', component: personal },
    { path: '/todolist', component: todolist }

];

const router = new Router({
    routes
})

export default router;