// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import firebase from 'firebase'
import {config} from './auth.js'

import router from './router'
import store from './store/store.js'

/* notifications */
import toasted from 'vue-toasted';
Vue.use(toasted, toastedOptions);
let toastedOptions = {
  theme: 'primary',
  position: 'top-right',
  duration: 5000
};

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  toasted,
  created() {
  	firebase.initializeApp(config);
  },
  components: { App },
  template: '<App/>'
});