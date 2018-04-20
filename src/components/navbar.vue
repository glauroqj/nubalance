<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark nu-navbar">
    <a class="navbar-brand" href="#/dashboard">Nubalance</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link active" href="#/dashboard">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/dashboard" disabled>Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/dashboard" disabled>Bank Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/dashboard" disabled>My Account</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    // loading: {
    //   type: Object,
    //   require: true
    // }
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