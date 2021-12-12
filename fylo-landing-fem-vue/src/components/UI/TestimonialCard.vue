<template>
  <div class="card">
    <div class="card__inner">
      <blockquote class="card__content">
        <p>
          {{ $t('testimonials.text') }}
        </p>
      </blockquote>
      <figure class="card__author">
        <div class="card__author-avatar">
          <img
            src="../../assets/images/avatar-testimonial.jpg"
            alt="author avatar"
          />
        </div>
        <figcaption class="card__author-info">
          <span class="card__author-name">{{
            $t('testimonials.author_name')
          }}</span>
          <span class="card__author-position">{{
            $t('testimonials.author_position')
          }}</span>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 5px;
  padding: 50px 35px;
  max-width: 350px;
  background-image: url('../../assets/images/icon-quotes.svg');
  background-repeat: no-repeat;
  background-position: 35px 35px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}
.card__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.card__content p {
  font-size: 14px;
  line-height: 20px;
  color: var(--veryDarkBlue);
  letter-spacing: 1.5;
}
.card__author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.card__author-avatar {
  max-width: 100%;
}
.card__author-avatar img {
  border-radius: 50%;
  object-fit: cover;
  max-width: 50px;
}
.card__author-info {
  display: flex;
  flex-direction: column;
}
.card__author-name {
  color: var(--veryDarkBlue);
  font-weight: 600;
  font-size: 14px;
}
.card__author-position {
  color: var(--veryDarkBlue);
  font-size: 10px;
}
</style>
