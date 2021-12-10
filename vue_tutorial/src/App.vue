<template>
  <div class="app">
    <h1>Pages with posts</h1>
    <MyButton style="margin-top: 20px; margin-bottom: 20px" @click="showDialog"
      >Создать пост</MyButton
    >
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList :posts="posts" @remove="removePost" v-if="!loading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';
import axios from 'axios';
import MyButton from './components/UI/MyButton.vue';
export default {
  components: {PostForm, PostList, MyButton},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      loading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.loading = true;
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        this.posts = res.data;
        console.log(res);
      } catch (err) {
        alert(err);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  padding: 20px;
}
</style>
