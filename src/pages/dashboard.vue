<template>
  <div class="animated fadeIn">
    <h1>LOGADO</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'dashboard',
  data () {
    return {
    }
  },
  created () {
    let vm = this;
    // this.$store.dispatch()
    vm.verifyLoginAcction();
  },
  computed: mapGetters({
    // state: 'dashboardState'
  }),
  methods: {
    ...mapActions({
      verifyLoginAcction: 'verifyLoginAcction'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
