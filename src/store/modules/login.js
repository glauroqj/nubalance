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
  loginState: state => state.all
}

// actions
const actions = {
  verifyLoginAcction(state, route) {
    let vm = this; 
    console.log(route)
    store.dispatch('activeLoadingAction', 'Loading...');
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        /* User is signed in. */
        console.log('Loged:', user, user.email, user.uid);
        router.push(route);

        /* save user on state */
        let payload = {
          user: {
            email: user.email,
            uid: user.uid
          }
        };
        vm.commit('userLogindMutation', payload);
        /* save on firebase */
        store.dispatch('savaUserDatabaseAction');
        return false;
      } 
      /* No user is signed in. */
      console.log('Not Loged!');
      router.push('/login');
      store.dispatch('removeLoadingAction');
    });
  },
  savaUserDatabaseAction() {
    if( state.all.user == '' || state.all.user == undefined ) {
      return false
    }
    firebase.database().ref('users/' + state.all.user.uid).set({
      email: state.all.user.email,
      uid : state.all.user.uid,
    });

  },
  loginAccAction(state, payload) {
    console.log('Login', payload)
    if( payload.email == '' || payload.pass == '' ) {
      /* show alert error */
      Vue.toasted.show('Empty fields');
      return false;
    }
    store.dispatch('activeLoadingAction', 'Verifying account...');
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
    .then((success)=> {
      console.log(success)
      router.push('/dashboard');
      store.dispatch('removeLoadingAction');
    })
    .catch((error)=> {
      let errorCode = error.code;
      let errorMessage = error.message;
      router.push('/login');
      store.dispatch('removeLoadingAction');
      Vue.toasted.show(errorMessage);
      console.log( error.code, error.message )
    });
  },
  createAccAction(state, payload) {
    console.log('CREATE ACCOUNT', payload)
    if( payload.email == '' || payload.pass == '' ) {
      /* show alert error */
      Vue.toasted.show('Empty fields');
      return false;
    }
    /* active loading */
    store.dispatch('activeLoadingAction', 'Creating account...');

    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
    .then((success)=> {
      router.push('/login');
      console.log(success)
    })
    .catch((error)=> {
      let errorCode = error.code;
      let errorMessage = error.message;
      Vue.toasted.show(errorMessage);
      store.dispatch('removeLoadingAction');
      router.push('/signup');
      console.log( error.code, error.message )
    });
  }
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
}

// mutations
const mutations = {
  createAccMutation(state, payload) {
  },
  userLogindMutation(state, payload) {
    state.all = payload;
    store.dispatch('removeLoadingAction');
  }
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