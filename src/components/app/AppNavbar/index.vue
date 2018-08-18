<template>
  <nav
    id="appNavbar"
    class="app-navbar navbar fixed-top navbar-expand-lg navbar-light bg-light"
  >
    <!-- Left side -->
    <div class="col d-flex justify-content-start align-items-end py-3">
      <!-- The navigation link to the products page -->
      <router-link
        id="homeLink"
        class="app-navbar__link navbar-brand py-0 mr-3 text-dark"
        :to="{name:'products'}"
        tag="a"
      >
        <span class="h1 app__title">
          Store
        </span>
      </router-link>
      <icon name="chevron-right" class=" mr-3 mb-2"/>
      <!-- Name of the current page -->
      <span class="app-navbar__page h5 text-capitalize text-muted mb-1">
        {{$route.name}}
      </span>
    </div>
    <!-- Right side -->
    <div class="col d-flex justify-content-end">
      <!-- The navigation link to the product cart page -->
      <router-link
        id="cartLink"
        class="app-navbar__link"
        :to="{name:'cart'}"
        tag="a"
      >
        <icon name="shopping-cart" scale=2></icon>
        <!-- The counter of the selected products amount -->
        <span v-if="selectedProductsCount>0" class="app-navbar__counter badge badge-danger">
          {{ selectedProductsCount }}
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/shopping-cart'
import 'vue-awesome/icons/chevron-right'

export default {
    name: 'AppNavbar',
    components: {
        Icon
    },
    computed: {
        ...mapGetters(['selectedProductsCount'])
    }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/app-navbar.scss';
</style>
