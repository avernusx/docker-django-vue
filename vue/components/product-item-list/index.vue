<template lang="pug">
  div
    ProductItem(:product="product")
    span(@click="toBasket(product)") В корзину
</template>

<script>
import ProductItem from '~/components/product-item'

export default {
  name: 'ProductItemList',
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
  },
  methods: {
    toBasket(product) {
      this.$store.dispatch('basket/ADD', product)
    }
  }
}
</script>