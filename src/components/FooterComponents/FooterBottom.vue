<template>
  <!-- parte inferiore footer -->
  <div class="footer-bottom p-3 text-end d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <span>Enjoy the low price. We are tracking any intention of piracy.</span>
      <span>©2020 NEXGEN isProudlyPowered by <a href="#">Coding</a>.</span>
    </div>
    <a
      href="#header"
      class="arrow rounded-circle d-flex justify-content-center align-items-center"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </a>
  </div>
  <!-- /parte inferiore footer -->
</template>

<script>
export default {
  name: "FooterBottom",
};
</script>

<style lang="scss" scoped>
.footer-bottom {
  background-color: #0d0d11;
  color: white;
  a {
    text-decoration: none;
    &.arrow {
      height: 2.5rem;
      width: 2.5rem;
      background-color: #29292d;
      color: #0d0d11;
    }
  }
}
</style>
