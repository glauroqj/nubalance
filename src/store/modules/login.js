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
  verifyLoginAcction() {
    let vm = this;
    store.dispatch('activeLoadingAction', 'Verifying account...');
    console.log('Verifying login...')
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        store.dispatch('removeLoadingAction');
        /* User is signed in. */
        let name, email, photoUrl, uid, emailVerified;
        console.log('Loged:', name, email, photoUrl);
        router.push('/dashboard');
        store.dispatch('removeLoadingAction');
        return false;
      } 
      /* No user is signed in. */
      console.log('Not Loged!');
      router.push('/login');
      store.dispatch('removeLoadingAction');
    });
  },
  loginAccAction(state, payload) {
    console.log('Login', payload)
    store.dispatch('activeLoadingAction', 'Verifying account...');
    // firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
    // .then((success)=> {
    //   debugger
    //   console.log(success)
    // })
    // .catch((error)=> {
    //   let errorCode = error.code;
    //   let errorMessage = error.message;
    //   console.log( error.code, error.message )
    // });
  },
  createAccAction(state, payload) {
    console.log('CREATE ACCOUNT', payload)
    if( payload.email == '' || payload.pass == '' ) {
      /* show alert error */
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
      router.push('/signup');
      let errorCode = error.code;
      let errorMessage = error.message;
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