<template>
  <div class="login animated fadeIn">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center">Login</h3>
          <form method="post" autocomplete="on" v-on:submit.prevent>
            <div class="col-md-6 box-form">
              <div class="form-group">
                <input type="text" id="userName" class="form-control input-sm" placeholder="username" />
              </div>

              <div class="form-group">
                <input type="password" id="userPassword" class="form-control input-sm" placeholder="password" />
              </div>

              <div class="form-group">    
                <button type="submit" class="btn btn-primary btn-md">Login</button>
              </div>
            </div>
          </form>

          <div class="col-xs-6 text-center">
            <a href="#/signup" class="btn btn-link btn-md">Create a new account?</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
    }
  },
  created () {
    let vm = this;
    // this.$store.dispatch()
    setTimeout(()=> {
      vm.verifyLoginAcction();
      // vm.$store.dispatch('removeLoadingAction');
    }, 1500);
  },
  computed: mapGetters({
    state: 'loginState'
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
