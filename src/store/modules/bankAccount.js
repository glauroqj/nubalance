import Vue from 'vue'
import router from '@/router'
import store from '@/store/store.js'
import firebase from 'firebase'
import {config} from '@/auth.js'

import createNuBank from 'nubank'

// initial state
const state = {
  all: {}
}

// getters
const getters = {
  bankAccountState: state => state.all
}

// actions
const actions = {
  loginNubankAction(state, payload) {
    const NuBank = createNuBank();
    if( payload.cpf == '' || payload.pass == '' ) {
      /* show alert error */
      Vue.toasted.show('Empty fields');
      return false;
    }

    console.log(payload)
    /* active loading */
    store.dispatch('activeLoadingAction', 'Connecting nubank account...');
    NuBank.getLoginToken({
      password: payload.pass,
      login: payload.cpf,
    })
    .then((response)=> {
      console.log(response)
      store.dispatch('removeLoadingAction');
    })
    .catch((error)=> {
      console.log(error.error)
      Vue.toasted.show(error.error);
      store.dispatch('removeLoadingAction');
    });
  }
}

// mutations
const mutations = {
  // userDashboardMutation(state, payload) {
  //   state.all = payload;
  // }
  // setProducts (state, products) {
  //   state.all = products
  // },

  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}