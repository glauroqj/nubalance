import Vue from 'vue'
import router from '@/router'
import store from '@/store/store.js'
import firebase from 'firebase'
import {config} from '@/auth.js'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  dashboardState: state => state.all
}

// actions
const actions = {
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