<template>
  <div>
    <h1>Pages with posts</h1>
    <MyInput v-focus v-model="searchQuery" placeholder="Search posts" />
    <div class="app__btns">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm />
    </MyDialog>
    <PostList :posts="sortedAndSearchedPosts" v-if="!loading" />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import PostForm from '../components/PostForm.vue';
import {ref} from 'vue';
import axios from 'axios';
import {usePosts} from '../hooks/usePosts';
import useSortredPosts from '../hooks/useSortedPosts';
import useSearchedAndSortedPosts from '../hooks/useSearchedAndSortedPosts';
export default {
  components: {PostForm, PostList},
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {
          value: 'title',
          name: 'By name',
        },
        {
          value: 'body',
          name: 'By text',
        },
      ],
    };
  },
  setup() {
    const {posts, loading, totalPages} = usePosts(10);
    const {selectedSort, sortedPosts} = useSortredPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} =
      useSearchedAndSortedPosts(sortedPosts);

    return {
      posts,
      loading,
      totalPages,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style>
.app__btns {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 20px;
}
.page {
  border: 1px solid black;
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
}
.current-page {
  border: 2px solid green;
}
.observer {
  height: 30px;
  background: green;
}
</style>
