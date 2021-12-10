<template>
  <div v-if="posts.length > 0">
    <h3>Posts list</h3>
    <PostItem
      :key="post.id"
      :post="post"
      v-for="post in posts"
      @remove="$emit('remove', post)"
    />
  </div>
  <div v-else>
    <h3 style="color: red">Posts list is empty</h3>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
