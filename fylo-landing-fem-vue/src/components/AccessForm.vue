s
<template>
  <form class="form" @submit.prevent="submitForm">
    <FormInput v-model="email" v-bind:class="{error: isError}" />
    <span class="form__error"> {{ error }} </span>
    <FormButton>Get started For Free</FormButton>
  </form>
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
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
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
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
  padding-bottom: 5px;
}
.form__error {
  color: #fff;
  font-size: 14px;
}
.error {
  border: 2px solid var(--red);
}
.input {
  border: none;
}
.btn[data-v-4821e19e] {
  width: 200px;
  height: 50px;
}

@media screen and (max-width: 727px) {
  .form {
    gap: 0;
  }
  .btn[data-v-4821e19e] {
    width: 100%;
  }
  .form__error {
    margin: 10px 0;
  }
}
@media screen and (max-width: 910px) {
  .btn[data-v-4821e19e] {
    width: 100%;
  }
}
</style>
