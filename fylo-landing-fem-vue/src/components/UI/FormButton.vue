<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  width: 70%;
  background: var(--brightBlue);
  border: none;
  padding: 10px 25px;
  color: #fff;
  font-family: var(--raleway);
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  font-weight: 600;
}
.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  opacity: 0;
  transition: all 0.2s ease;
}
.btn:hover::after {
  opacity: 1;
}
@media screen and (max-width: 727px) {
  .btn {
    width: 100%;
    height: 50px;
  }
}
@media screen and (max-width: 910px) {
  .btn {
    width: 100%;
    height: 50px;
  }
}
</style>
