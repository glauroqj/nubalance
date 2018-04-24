/*
example vuex https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart
*/

import Vue from 'vue'
import Vuex from 'vuex'

/* modules */
import loadingModule from './modules/loading.js'
import loginModule from './modules/login.js'
import dashboardModule from './modules/dashboard.js'
import bankAccountModule from './modules/bankAccount.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	modules: {
		loading: loadingModule,
		login: loginModule,
    dashboard: dashboardModule,
    bankAccount: bankAccountModule
	}
  // state: {
  //   count: 0
  // },
  // mutations: {

  // },  mutations 
  // actions: {

  // }, /* actions */
  // getters: {

  // }/* getters */
})

export default store;