<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <form action="">
            <div class="box-form">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" id="userName" class="form-control input-sm" placeholder="username" />
                </div>

                <div class="form-group">
                  <input type="password" id="userPassword" class="form-control input-sm" placeholder="password" />
                </div>

                <div class="form-group">    
                  <a href="#" class="btn btn-primary btn-md">login</a>
                </div>
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
  name: 'login',
  data () {
    return {
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
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
