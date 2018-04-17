<template>
  <div class="create animated fadeIn">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center">Sign Up</h3>
          <form method="post" autocomplete="off" v-on:submit.prevent>
            <div class="col-md-6 box-form">
              <div class="form-group">
                <input type="text" class="form-control input-sm" v-model="email" placeholder="Email" />
              </div>

              <div class="form-group">
                <input type="password" class="form-control input-sm" v-model="pass" placeholder="Password" />
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-md" @click.prevent="createAccAction({email,pass})">Create Account</button>  
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  created () {
    let vm = this;
    // this.$store.dispatch()
    setTimeout(()=> {
      vm.$store.dispatch('removeLoadingAction');
    }, 1500);
  },
  computed: mapGetters({
    state: 'loginState'
  }),
  methods: {
    ...mapActions({
      createAccAction: 'createAccAction'
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
