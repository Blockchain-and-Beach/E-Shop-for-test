<template>
  <div
    id="productList"
    class="product-list row px-2"
    v-if="productList"
  >
    <!-- The list of products -->
    <div
      class="col-md-4 col-sm-12 col-lg-3"
      v-for="item in productList"
      :key="item.id"
    >
      <!-- Product -->
      <product
        class="mb-4"
        :item="item"
        :currency="currency"
      >
        <!-- "Add to cart" button -->
        <product-button
          caption="Add to cart"
          :classes="['btn-primary']"
          @button-click="addOrder(item)"
        />
      </product>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Product from '../Product'
import ProductButton from '../ProductButton'

export default {
    name: 'ProductList',
    components: {
        Product,
        ProductButton
    },
    computed: {
        ...mapGetters(['currency', 'productList'])
    },
    methods: {
        ...mapActions(['addOrder'])
    }
}
</script>
