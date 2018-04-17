import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login.vue'
import signup from '@/pages/signup.vue'
import dashboard from '@/pages/dashboard.vue'

Vue.use(Router)

export default new Router({
	routes: [
	{ path: '*', redirect: '/login' },
	{	path: '/login', name: 'login', component: login },
	{	path: '/signup', name: 'signup', component: signup },
	{	path: '/dashboard', name: 'dashboard', component: dashboard }
	]
})
