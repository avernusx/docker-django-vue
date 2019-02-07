<template lang="pug">
  .product
    .product-name {{ product.name }}
    .product-cost Цена: {{ product.price }}
    nuxt-link(:to="{ name: 'products-id', params: { id: product.id } }") Подробнее
</template>

<script>
export default {
  name: 'ProductItem',
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

<style lang="sass" scoped>
  .product
    margin-top: 20px
</style>