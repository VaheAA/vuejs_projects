<template>
  <section class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">{{ $t('hero.title') }}</h1>
          <p class="hero__text">{{ $t('hero.text') }}</p>
          <HeroForm />
        </div>
        <div class="hero__image">
          <img
            src="../assets/images/illustration-1.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroForm from './HeroForm.vue';
export default {
  name: 'Hero',
  components: {HeroForm},
};
</script>

<style scoped>
.hero {
  padding-top: 100px;
  margin-bottom: 100px;
}
.hero__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}
.hero__content {
  width: 100%;
}
.hero__title {
  color: var(--veryDarkBlue);
  font-size: 38px;
  line-height: 50px;
  padding-bottom: 35px;
}
.hero__text {
  color: var(--veryDarkBlue);
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 25px;
}
.hero__image {
  max-width: 100%;
}
.hero__image img {
  max-width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 727px) {
  .hero {
    padding-top: 50px;
  }
  .hero__inner {
    flex-direction: column-reverse;
  }
  .hero__content {
    text-align: center;
  }
  .hero__title {
    font-size: 28px;
    line-height: 32px;
  }
  .hero__text {
    font-size: 16px;
  }
}
@media screen and (max-width: 910px) {
  .hero__title {
    font-size: 28px;
    line-height: 32px;
  }
  .hero__text {
    font-size: 16px;
    line-height: 18px;
  }
}
</style>
