<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'MyButton',
};
</script>
<style scoped>
.btn {
  padding: 15px;
  color: teal;
  background: none;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
