<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Sign up for giveaway</h1>
      <p>Grab your snack for the half price</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:poster>
        <img
          src="../src/assets/229004ed0196672d6b48ff4f6c3d471f.jpg"
          alt="French Dispatch"
        />
      </template>
      <h1>Buy ticket for the movie "French Dispatch"</h1>
      <p>Promo for the first 50 buyers!</p>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModal2">Open Modal 2</button>
</template>

<script>
import Modal from "../src/components/Modal.vue";
export default {
  components: { Modal },
  name: "App",
  data() {
    return {
      title: "My Vue App",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
