<template lang="pug">
  .basket
    .basket-title Корзина
    .basket-count Количество: {{ count }}
    .basket-price Цена: {{ price }}
</template>

<script>
export default {
  name: 'HeaderBasket',
  computed: {
    products() {
      return this.$store.state.basket.items
    },
    count() {
      return this.products.reduce((count, item) => count += item.count, 0)
    },
    price() {
      return this.products.reduce((price, item) => price += item.count * item.price, 0)
    }
  }
}
</script>

<style lang="sass" scoped>
  .product
    margin-top: 20px
</style>