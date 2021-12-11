<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from '../../mixnis/toggleMixin';

export default {
  name: 'MyDialog',
  mixins: [toggleMixin],
  mounted() {
    console.log('dialog mounted');
  },
};
</script>
<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background: #fff;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
