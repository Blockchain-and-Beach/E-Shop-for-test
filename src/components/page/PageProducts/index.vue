<template>
  <div
    id="pageProducts"
    class="page-products"
  >
    <product-list />
  </div>
</template>

<script>
import ProductList from '../../product/ProductList'

export default {
    name: 'PageProducts',
    components: {
        ProductList
    }
}
</script>
