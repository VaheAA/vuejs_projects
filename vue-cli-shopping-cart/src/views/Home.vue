<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">
    <h2>Recommended</h2>
    <div class="recommended">
      <ProductCatd
        :product="product"
        :addToCart="addToCart"
        v-for="(product, index) in inventory.slice(0, 3)"
        :index="index"
        :key="product.id"
      />
    </div>
  </main>
</template>

<script>
import ProductCatd from '../components/ProductCatd.vue';
export default {
  name: 'Home',
  props: ['inventory', 'addToCart'],
  components: {ProductCatd}
};
</script>
