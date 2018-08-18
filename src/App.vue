<template>
  <div id="app" class="app">
    <header>
      <app-navbar />
    </header>
    <section class="app__content container-fluid">
      <router-view />
    </section>
  </div>
</template>

<script>
import AppNavbar from './components/app/AppNavbar'

export default {
    name: 'App',
    components: {
        AppNavbar
    },
    created () {
    // Load product list
        this.$store.dispatch('loadProductList')
        // Load cart from local storage
        this.$store.dispatch('loadCart')
    }
}
</script>

<style lang="scss" scoped>
  @import './styles/app.scss';
</style>
