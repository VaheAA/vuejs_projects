<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <MyInput v-focus v-model="post.title" placeholder="Title" />
    <MyInput v-model="post.body" placeholder="Description" />
    <MyButton style="align-self: flex-end; margin-top: 15px" @click="createPost"
      >Создать
    </MyButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
