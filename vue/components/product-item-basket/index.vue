<template lang="pug">
  div
    ProductItem(:product="product")
    span Удалить
</template>

<script>
import ProductItem from '~/components/product-item'

export default {
  name: 'ProductItem',
  components: {
    ProductItem
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>