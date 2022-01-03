<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCatd
        :product="product"
        :addToCart="addToCart"
        v-for="(product, index) in inventory.slice(0, 6)"
        :index="index"
        :key="product.id"
      />
    </div>
  </main>
</template>

<script>
import ProductCatd from '../components/ProductCatd.vue';
export default {
  props: ['inventory', 'addToCart'],
  components: {ProductCatd}
};
</script>

<style></style>
