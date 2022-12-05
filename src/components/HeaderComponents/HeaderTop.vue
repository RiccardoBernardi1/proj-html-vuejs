<template>
  <div class="header-top py-3">
    <div class="container d-flex justify-content-between">
      <div>
        <i class="fa-solid fa-clock"></i>
        <span> Open Hours: Mon - Sat - 9:00 - 18:00</span>
      </div>
      <div class="header-top_right">
        <span class="me-5"
          ><i class="fa-solid fa-phone"></i> +1(305) 1234-5678</span
        >
        <span class="me-5"
          ><i class="fa-solid fa-envelope"></i> hello@example.com</span
        >
        <i class="fa-brands fa-facebook me-5"></i>
        <i class="fa-brands fa-twitter me-5"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>

<style lang="scss" scoped>
.header-top {
  background-color: #21333e;
  color: white;
}
</style>
