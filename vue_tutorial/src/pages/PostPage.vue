<template>
  <div>
    <h1>Pages with posts</h1>
    <MyInput v-focus v-model="searchQuery" placeholder="Search posts" />
    <div class="app__btns">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!loading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="page__wrapper">
      <div
        class="page"
        :class="{'current-page': page === pageNumber}"
        :key="pageNumber"
        v-for="pageNumber in totalPages"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import PostForm from '../components/PostForm.vue';
import axios from 'axios';
export default {
  components: {PostForm, PostList},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      loading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 5,
      totalPages: 0,
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
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.loading = true;
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
        this.posts = res.data;
      } catch (err) {
        alert(err);
      } finally {
        this.loading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...res.data];
      } catch (err) {
        alert(err);
      } finally {
      }
    },
  },

  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
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
