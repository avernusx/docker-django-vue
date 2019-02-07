<template lang="pug">
  div
    ProductItemList(v-for="product, id in products", :key="id", :product="product")
</template>

<script>
import ProductItemList from '~/components/product-item-list'

export default {
  name: 'ProductList',
  components: {
    ProductItemList
  },
  props: {
    products: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>