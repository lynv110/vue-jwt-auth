
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

import axios from "axios";
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import App from "./components/common/App";
import Dashboard from "./components/common/Dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Info from "./components/user/Info";

axios.defaults.baseURL = 'http://localhost:8080/vue-jwt-auth/public/api';

const router = new VueRouter({
    routes: [
        {path: '/', name: 'common.dashboard', component: Dashboard, meta: {auth: true}},
        {path: '/Register', name: 'auth.register', component: Register, meta: {auth: false}},
        {path: '/login', name: 'auth.login', component: Login, meta: {auth: false}},
        {path: '/info', name: 'user.info', component: Info, meta: {auth: true}}
    ]
});

Vue.router = router;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

App.router = Vue.router;

new Vue(App).$mount('#app');

/*
const app = new Vue({
    el: '#app',
    router
});
*/
