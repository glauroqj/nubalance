<template>
  <div class="nu-dashboard animated fadeIn">
    <navbar/>
    <div class="container-fluid">
      <div class="row">
       <div class="col-md-12">
        <form method="post" autocomplete="off" v-on:submit.prevent>
          <div class="col-md-3 box-form">
            <div class="form-group">
              <input type="number" id="cpf" class="form-control input-sm" v-model="cpf" placeholder="C.P.F" />
            </div>

            <div class="form-group">
              <input type="password" id="password" class="form-control input-sm" v-model="pass" placeholder="Password" />
            </div>

            <div class="form-group">    
              <button type="submit" class="btn btn-success btn-md" @click.prevent="loginNubankAction({cpf, pass})">Connect with Nubank</button>
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
import navbar from '@/components/navbar.vue'

export default {
  name: 'bank-account',
  components: {
    navbar
  },
  data () {
    return {
      cpf: '',
      pass: ''
    }
  },
  created () {
    let vm = this;
    // this.$store.dispatch()
    vm.verifyLoginAcction('/dashboard/bank-account');
  },
  computed: mapGetters({
    state: 'bankAccountState'
  }),
  methods: {
    ...mapActions({
      verifyLoginAcction: 'verifyLoginAcction',
      loginNubankAction: 'loginNubankAction'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
