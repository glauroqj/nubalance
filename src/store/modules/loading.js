// initial state
const state = {
	all: {
		showLoading: true,
		text: 'Loading...',
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
		let vm = this;
		let payload = {
			showLoading: false,
			text: 'Loading...',
			height: 30,
			width: 30
		};
		setTimeout(()=> {
			vm.commit('removeLoadingMutation', payload);
		}, 350);
	},
	activeLoadingAction (state, text) {
		let vm = this;
		let payload = {
			showLoading: true,
			text: text,
			height: 30,
			width: 30
		};
		setTimeout(()=> {
			vm.commit('activeLoadingMutation', payload);
		}, 350);
	}
}

// mutations
const mutations = {
	removeLoadingMutation (state, payload) {
		// console.log('mutation remove loading', payload)
		state.all = payload;
	},
	activeLoadingMutation (state, payload) {
		state.all = payload;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}