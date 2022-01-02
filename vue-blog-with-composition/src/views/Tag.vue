<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postWithTags" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts";
export default {
  components: {
    PostList,
    TagCloud,
    Spinner,
  },
  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();
    load();

    const postWithTags = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });
    return { posts, postWithTags, error };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>