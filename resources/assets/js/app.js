
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuetifi from "vuetify";
Vue.use(Vuetifi);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Dashboard from "./components/common/Dashboard";
import Login from "./components/auth/Login";
import Info from "./components/user/Info";

const router = new VueRouter({
    routes: [
        {path: '/', name: 'common.dashboard', component: Dashboard},
        {path: '/login', name: 'auth.login', component: Login},
        {path: '/info', name: 'user.info', component: Info}
    ]
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('dashboard', require('./components/common/Dashboard.vue'));

const app = new Vue({
    el: '#app',
    router
});
