<template>
  <h1>Job details page</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: {
    id: String,
  },
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
};
</script>

<style>
</style>