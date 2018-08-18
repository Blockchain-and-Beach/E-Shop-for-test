<template>
  <div
      id="productCartBottomNav"
      class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light"
    >
      <div class="col d-flex justify-content-between my-2">
        <!-- Total price -->
        <span
          id="totalPrice"
          class="h4 mb-0 text-muted"
        >
          Total price: {{selectedProductsPrice}}{{currency.symbol}}
        </span>
        <button
          id="Purchase"
          class="btn btn-outline-danger"
          @click="Purchase()"
        >
          Purchase
        </button>
        <!-- The cart clearing button-->
        <button
          id="clearCart"
          class="btn btn-outline-danger"
          @click="clearCart()"
        >
          Clear cart
        </button>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductCartBottomNav',

    computed: {
        ...mapGetters([
            'selectedProductsPrice',
            'currency'
        ])
    },
    methods: {
        ...mapActions(['clearCart'])
    }
}
</script>
