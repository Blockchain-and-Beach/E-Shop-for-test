<template>
  <div
    id="ProductCartItem"
    class="product-cart-item"
  >
    <!-- The product item-->
    <product
      :item="item"
      :currency="currency"
    >
      <!-- The total price for current item -->
      <div class="row mt-4 ">
        <div class="col-12 text-center mb-2">
          <h6>
            <span>
              Total: {{item.price * item.number}}{{currency.symbol}}
            </span>
          </h6>
        </div>
      </div>
      <!-- Setter of the product units amount -->
      <product-amount-setter
       class="mb-4"
       :item="item"
      />
      <!-- The removing item button -->
      <product-button
        caption="Remove from cart"
        :classes="['btn-danger']"
        @button-click="removeFromCart(item)"
      />
    </product>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Product from '../Product'
import ProductAmountSetter from '../ProductAmountSetter'
import ProductButton from '../ProductButton'

export default {
    name: 'ProductCartItem',
    components: {
        Product,
        ProductAmountSetter,
        ProductButton
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters(['currency'])
    /* Two-way computed property for
    changing the value in the input */
    },
    methods: {
        ...mapActions([
            'removeFromCart'
        ])
    }
}
</script>
