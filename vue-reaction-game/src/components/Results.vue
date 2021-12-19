<template>
  <div class="result">
    <p>Reaction Time is: {{ result }}ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ["result"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.result < 250) {
      this.rank = "NinjaFingers";
    } else if (this.result < 400) {
      this.rank = "Rapid Reflexis";
    } else {
      this.rank = "Snail pace...";
    }
  },
};
</script>

<style>
.result {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  font-size: 20px;
}
.rank {
  font-size: 1.4rem;
  color: #ffd54e;
  font-weight: bold;
}
</style>