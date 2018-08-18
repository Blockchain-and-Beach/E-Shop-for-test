<template>
  <div id="productCart" class="product-cart">
    <!-- List of selected products -->
    <div
      class="product-cart__list row px-2"
      v-if="selectedProducts"
    >
      <!-- Cart item -->
      <product-cart-item
        class="col-lg-3 col-sm-12 col-md-4 mb-4"
        v-for="item in selectedProducts"
        :key="item.id"
        :item="item"
      />
    </div>
    <!-- Empty cart message -->
    <div v-else class="row">
      <div class="col text-center mt-5">
        <span
          id="emptyMessage"
          class="h4 text-black-50"
        >
          The cart is empty
        </span>
      </div>
    </div>
    <!-- Bottom navigation pane with info about total price
    and the shopping cart clearing button -->
    <product-cart-bottom-nav
      v-if="selectedProducts"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCartItem from '../ProductCartItem'
import ProductCartBottomNav from '../ProductCartBottomNav'

export default {
    name: 'ProductCart',
    components: {
        ProductCartItem,
        ProductCartBottomNav
    },
    computed: {
        ...mapGetters([
            'selectedProducts',
            'selectedProductsPrice',
            'selectedProductsCount',
            'currency'
        ])
    },
    methods: {
        ...mapActions(['clearCart'])
    }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/product-cart.scss';
</style>
