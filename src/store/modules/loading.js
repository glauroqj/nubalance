// initial state
const state = {
	all: {
		showLoading: true,
		text: 'Carregando',
		height: 30,
		width: 30
	}
}

// getters
const getters = {
	loadingState: state => state.all
}

// actions
const actions = {
	removeLoadingAction () {
		let payload = {
			showLoading: false,
			text: 'Carregando...',
			height: 30,
			width: 30
		};
		this.commit('removeLoadingMutation', payload);
	}
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
}

// mutations
const mutations = {
	removeLoadingMutation (state, payload) {
		console.log('mutation remove loading', payload)
		state.all = payload;
	}

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