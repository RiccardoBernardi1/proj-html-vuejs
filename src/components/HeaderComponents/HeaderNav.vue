<template>
  <div
    class="header-nav d-flex justify-content-between align-items-center py-3"
  >
    <img src="../../assets/logo.svg" alt="" />
    <nav class="d-flex align-items-center">
      <a v-for="obj in links" :href="obj.linkHref" :class="obj.class">{{
        obj.linkText
      }}</a>
      <a href="#" class="me-5 fw-bold" v-html="userIcon"></a>
    </nav>
  </div>
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
          class: "me-5 fw-bold",
        },
        {
          linkText: "ABOUT",
          linkHref: "#transport",
          class: "me-5 fw-bold",
        },
        {
          linkText: "SERVICES",
          linkHref: "#services",
          class: "me-5 fw-bold",
        },
        {
          linkText: "PROCESS",
          linkHref: "#process",
          class: "me-5 fw-bold",
        },
        {
          linkText: "TESTIMONIALS",
          linkHref: "#feedbacks",
          class: "me-5 fw-bold",
        },
        {
          linkText: "GET IN TOUCH",
          linkHref: "#get-in-touch",
          class: "btn rounded fw-bold",
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
    padding: 0.625rem 1.5625rem 0.9375rem;
  }
  &:hover {
    color: white;
    scale: 1.2;
  }
}
</style>
