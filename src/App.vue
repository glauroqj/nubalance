<template>
  <div id="app">
    <loading :loading="state"/>

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

<style lang="less" src="./assets/css/main.less"></style>