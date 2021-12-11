<template>
  <section class="features">
    <div class="container">
      <div class="features__inner">
        <div class="features__content">
          <h2 class="features__title">{{ $t('features.title') }}</h2>
          <div class="features__text">
            <p>{{ $t('features.texts.1') }}</p>
            <p>{{ $t('features.texts.2') }}</p>
          </div>
          <a class="features__link" href="#">
            {{ $t('features.link') }}
            <img src="../assets/images/icon-arrow.svg" alt="" />
          </a>
          <TestimonialCard></TestimonialCard>
        </div>
        <div class="features__image">
          <img src="../assets/images/illustration-2.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialCard from './UI/TestimonialCard.vue';
export default {components: {TestimonialCard}};
</script>

<style scoped>
.features {
  margin-top: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url('../assets/images/bg-curve-desktop.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.features__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}
.features__content {
  width: 100%;
}
.features__title {
  color: var(--veryDarkBlue);
  font-size: 38px;
  line-height: 50px;
  padding-bottom: 35px;
}
.features__text p {
  color: var(--veryDarkBlue);
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 25px;
}
.features__link {
  color: var(--moderateCyan);
  display: inline-block;
  align-items: center;
  gap: 10px;
  position: relative;
  margin-bottom: 30px;
}
.features__link:hover {
  opacity: 0.7;
}
.features__link img {
  display: inline-block;
  vertical-align: middle;
}
.features__link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--moderateCyan);
  left: 0;
  right: 0;
  bottom: -5px;
}
.features__image {
  max-width: 100%;
}
.features__image img {
  max-width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 727px) {
  .features {
    background-image: url('../assets/images/bg-curve-mobile.svg');
    background-size: cover;
  }
  .features__inner {
    flex-direction: column-reverse;
  }
  .features__title {
    font-size: 18px;
    text-align: center;
    line-height: 20px;
  }
  .features__text p {
    font-size: 16px;
  }
  .features__link {
    text-align: center;
  }
}
@media screen and (max-width: 910px) {
  .features__title {
    font-size: 26px;
    text-align: center;
    line-height: 28px;
  }
}
</style>
