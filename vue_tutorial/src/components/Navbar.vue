<template>
  <div class="navbar">
    <div>Vue 3</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/')">Home</MyButton>
      <MyButton @click="$router.push('/posts')" style="margin-left: 20px"
        >Posts</MyButton
      >
      <MyButton @click="$router.push('/about')" style="margin-left: 20px"
        >About</MyButton
      >
      <MyButton @click="$router.push('/store')" style="margin-left: 20px"
        >Store</MyButton
      >
      <MyButton @click="$router.push('/composition')" style="margin-left: 20px"
        >Composition API</MyButton
      >
    </div>
  </div>
</template>

<script></script>

<style scoped>
.navbar {
  height: 50px;
  background: lightgrey;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
