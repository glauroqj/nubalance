<template lang="html">
	<div>
		<div class="loading animated fadeIn" v-if="loading.showLoading">
			<div class="spiner">
				<orbit-spinner :animation-duration="1200" :size="80" color="#0014ff"/>
			</div>
			{{loading.text}}
		</div>
	</div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners';

export default {
	name: 'loading',
	components: {
		OrbitSpinner
	},
	props: {
		loading: {
			type: Object,
			require: true
		}
	},
	data () {
		return {
		}
	},
	mounted() {
	},
	methods: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>