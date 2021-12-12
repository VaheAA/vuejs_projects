<template>
  <nav class="nav">
    <div class="nav__menu">
      <ul class="nav__menu-list">
        <li class="nav__menu-item">
          <a class="nav__menu-link" href="">{{ $t('nav.features') }}</a>
        </li>
        <li class="nav__menu-item">
          <a class="nav__menu-link" href="">{{ $t('nav.team') }}</a>
        </li>
        <li class="nav__menu-item">
          <a class="nav__menu-link" href="">{{ $t('nav.signIn') }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.nav__menu-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__menu-item {
  margin-right: 55px;
}
.nav__menu-link {
  color: var(--verнDarkBlue);
  font-size: 16px;
  font-weight: 400;
}
.nav__lang-list {
  display: flex;
  align-items: center;
}
.nav__lang-item {
  margin-right: 15px;
}
.nav__lang-link {
  color: var(--veryDarkBlue);
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
}
.nav__lang-link:hover {
  font-weight: 700;
}
.nav__lang-link.active {
  font-weight: 700;
}

@media (max-width: 727px) {
  .nav__menu {
    max-width: 100%;
  }
  .nav__menu-list {
    margin-left: auto;
  }
  .nav__menu-item {
    margin-right: 15px;
  }
  .nav__menu-link {
    font-size: 14px;
  }
}
</style>
