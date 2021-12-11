<template>
  <section class="access">
    <div class="container">
      <div class="access__inner">
        <div class="access__content">
          <h3 class="access__title">{{ $t('earlyAccess.title') }}</h3>
          <p class="access__text">{{ $t('earlyAccess.text') }}</p>
        </div>
        <AccessForm></AccessForm>
      </div>
    </div>
  </section>
</template>

<script>
import AccessForm from './AccessForm.vue';
export default {
  name: 'EarlyAccess',
  components: {
    AccessForm,
  },
};
</script>

<style scoped>
.access {
  background-color: var(--desaturatedBlue);
  padding: 100px 85px;
}
.access__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 240px;
}
.access__content {
  width: 100%;
}
.access__title {
  color: #fff;
  font-size: 30px;
  line-height: 32px;
  margin-bottom: 30px;
}
.access__text {
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 727px) {
  .access {
    padding: 50px 20px;
  }
  .access__inner {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  .access__title {
    font-size: 20px;
  }
}
@media screen and (max-width: 910px) {
  .access__inner {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>
