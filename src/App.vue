<template>
  <div id="app">
    <loading :loading="state"></loading>
    <router-view v-show="!state.showLoading"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import loading from '@/components/loading.vue';

export default {
  name: 'Nubalance',
  components: {
    loading
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  created () {
    let vm = this;
  },
  computed: mapGetters({
    state: 'loadingState'
  })
}
</script>

<style>
@import './assets/css/main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>