<template>
  <!-- logo e navigazione header -->
  <div
    class="header-nav d-flex justify-content-between align-items-center py-3"
  >
    <img src="../../assets/logo.svg" alt="" />
    <nav class="d-flex align-items-center">
      <a v-for="obj in links" :href="obj.linkHref" :class="obj.class">{{
        obj.linkText
      }}</a>
      <a href="#" class="me-5 fw-bold fs-5" v-html="userIcon"></a>
    </nav>
  </div>
  <!-- /logo e navigazione header -->
</template>

<script>
export default {
  name: "HeaderCenter",
  data() {
    return {
      links: [
        {
          linkText: "HOME",
          linkHref: "#header",
          class: "fw-normal me-5 ",
        },
        {
          linkText: "ABOUT",
          linkHref: "#footer",
          class: "fw-normal me-5 ",
        },
        {
          linkText: "SERVICES",
          linkHref: "#services",
          class: "fw-normal me-5 ",
        },
        {
          linkText: "PROCESS",
          linkHref: "#process",
          class: "fw-normal me-5 ",
        },
        {
          linkText: "TESTIMONIALS",
          linkHref: "#feedbacks",
          class: "fw-normal me-5 ",
        },
        {
          linkText: "GET IN TOUCH",
          linkHref: "#get-in-touch",
          class: "fw-normal btn rounded ",
        },
      ],
      userIcon: `<i class="fa-regular fa-user"></i>`,
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
  transition: scale 0.3s;
  &.btn {
    order: 3;
    background-color: #058283;
    border: 0.125rem solid #058283;
    padding: 0.9375rem 1.5625rem 0.9375rem;
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  &:hover {
    color: white;
    scale: 1.2;
  }
}
</style>
