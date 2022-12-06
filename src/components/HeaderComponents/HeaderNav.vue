<template>
  <div
    class="header-nav d-flex justify-content-between align-items-center py-3"
  >
    <img src="../../assets/logo.svg" alt="" />
    <nav>
      <a class="me-5 fw-bold" v-for="(link, index) in links" href="#">{{
        link
      }}</a>
      <a href="#" class="me-5 fw-bold"><i class="fa-regular fa-user"></i></a>
      <a href="#" class="fw-bold get-in-touch px-3 py-2 rounded"
        >GET IN TOUCH</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderCenter",
  data() {
    return {
      links: ["HOME", "ABOUT", "SERVICES", "PROCESS", "TESTIMONIALS"],
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 9.375rem;
}
a {
  text-decoration: none;
  color: white;
  &.get-in-touch {
    background-color: #058283;
    border: 0.125rem solid #058283;
  }
}
</style>
