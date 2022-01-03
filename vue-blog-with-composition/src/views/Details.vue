<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="delete" @click="handleClick">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import getPost from "../composables/getPost";
import { useRoute, useRouter } from "vue-router";
import { removeDoc } from "../firebase/config";
export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { post, error, load } = getPost(route.params.id);
    load();
    const handleClick = async () => {
      await removeDoc(route.params.id);
      router.push("/");
    };
    return { post, error, route, handleClick };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
}
</style>