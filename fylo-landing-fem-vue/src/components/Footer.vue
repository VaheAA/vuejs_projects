<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__top">
          <div class="footer__logo">
            <img src="../assets/images/logo-white.svg" alt="logo" />
          </div>
        </div>
        <div class="footer__info">
          <div class="footer__contacts">
            <ul class="footer__list">
              <li class="footer__list-item">
                <a class="footer__list-link" href="#">
                  <img
                    src="../assets/images/icon-phone.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  Phone: +1-543-123-4567
                </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#">
                  <img
                    src="../assets/images/icon-email.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  example@fylo.com
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__menu">
            <ul class="footer__list">
              <li class="footer__list-item">
                <a class="footer__list-link" href="#"> About Us </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#"> Jobs </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#"> Press </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#"> Blog </a>
              </li>
            </ul>
            <ul class="footer__list">
              <li class="footer__list-item">
                <a class="footer__list-link" href="#"> Contact Us </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#"> Terms </a>
              </li>
              <li class="footer__list-item">
                <a class="footer__list-link" href="#"> Privacy </a>
              </li>
            </ul>
          </div>
          <div class="footer__social">
            <ul class="footer__list footer__list--row">
              <li class="footer__list-item">
                <a title="facebook" class="footer__list-link" href="#"
                  ><i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="footer__list-item">
                <a title="twitter" class="footer__list-link" href="#"
                  ><i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="footer__list-item">
                <a title="instagram" class="footer__list-link" href="#"
                  ><i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  padding-top: 90px;
  padding-bottom: 50px;
  background-color: var(--veryDarkBlue);
}
.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.footer__info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.footer__menu {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 200px;
}
.footer__list--row {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.footer__list-item {
  margin-bottom: 15px;
}
.footer__list-link {
  color: #fff;
  transition: all 0.2s ease;
}
.footer__list-link:hover {
  color: var(--brightBlue);
}
.footer__list-link img {
  margin-right: 10px;
}
.footer__social .footer__list-link {
  font-size: 22px;
  transition: all 0.2s ease;
}
.footer__social .footer__list-link:hover {
  color: var(--brightBlue);
}

@media screen and (max-width: 727px) {
  .footer {
    padding-bottom: 20px;
  }
  .footer__info {
    flex-direction: column;
    gap: 20px;
  }
  .footer__menu {
    flex-direction: column;
    gap: 20px;
  }
  .footer__social {
    width: 100%;
  }
  .footer__list--row {
    justify-content: center;
    align-items: center;
  }
}
</style>
