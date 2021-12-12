<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    type="email"
    placeholder="Enter Your email"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    id: String,
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style>
.input {
  width: 100%;
  border: 2px solid var(--veryDarkBlue);
  padding: 0 20px;
  border-radius: 5px;
  color: var(--veryDarkBlue);
  height: 50px;
}
.input:focus {
  outline: none;
}
</style>
