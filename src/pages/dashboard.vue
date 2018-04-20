<template>
  <div class="nu-dashboard animated fadeIn">
    <navbar/>
    <div class="container-fluid">
      <div class="row">
        <grid/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import navbar from '@/components/navbar.vue'
import grid from '@/components/grid-list.vue'

export default {
  name: 'dashboard',
  components: {
    navbar,
    grid
  },
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
    state: 'dashboardState'
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
