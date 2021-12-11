s
<template>
  <form class="form" @submit.prevent="submitForm">
    <FormInput v-model="email" v-bind:class="{error: isError}" />
    <FormButton>Get started</FormButton>
  </form>
  <span class="form__error"> {{ error }} </span>
</template>

<script>
import FormInput from './UI/FormInput.vue';
import FormButton from './UI/FormButton.vue';
export default {
  components: {FormInput, FormButton},
  data() {
    return {
      error: '',
      email: '',
      isError: false,
    };
  },
  methods: {
    submitForm() {
      if (!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.error = 'Please check your email';
        this.isError = true;
        return;
      }
      this.error = '';
      this.isError = false;
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
  padding-bottom: 5px;
}
.form__error {
  color: var(--red);
  font-size: 14px;
}
.error {
  border: 2px solid var(--red);
}
@media screen and (max-width: 727px) {
  .form {
    flex-direction: column;
  }
}
@media screen and (max-width: 910px) {
  .form {
    flex-direction: column;
  }
}
</style>
