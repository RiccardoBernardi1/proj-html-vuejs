<template>
  <footer>
    <div class="footer-top">
      <div class="container d-flex justify-content-between">
        <div class="col-different">
          <img src="../assets/logo.svg" alt="Logo NexGen" />
          <p class="mt-4">
            A Functional HTML template for Corporate & Business.
          </p>
          <div class="mb-3">
            <i class="fa-solid fa-phone"></i> +1(305) 1234-5678
          </div>
          <div class="mb-3">
            <i class="fa-solid fa-envelope"></i> hello@example.com
          </div>
          <div class="mb-5">
            <i class="fa-solid fa-location-dot"></i> Main Avenue, 987
          </div>
          <a href="#" class="fw-bold read-more px-3 py-2 rounded"
            >GET IN TOUCH</a
          >
        </div>
        <div class="col-equal p-5 rounded-3" v-for="n in 3">
          <h4 class="fw-bold mb-3">About</h4>
          <ul>
            <li><i class="fa-solid fa-chevron-right"></i> The Company</li>
            <li><i class="fa-solid fa-chevron-right"></i> The Company</li>
            <li><i class="fa-solid fa-chevron-right"></i> The Company</li>
            <li><i class="fa-solid fa-chevron-right"></i> The Company</li>
            <li><i class="fa-solid fa-chevron-right"></i> The Company</li>
            <li><i class="fa-solid fa-chevron-right"></i> The Company</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom p-3 text-end d-flex align-items-center">
      <div class="container d-flex justify-content-between">
        <span
          >Enjoy the low price. We are tracking any intention of piracy.</span
        >
        <span>@2020 NEXGEN isProudlyPowered by <a href="@">Coding</a>.</span>
      </div>
      <a
        href="#"
        class="arrow rounded-circle d-flex justify-content-center align-items-center"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
.footer-top {
  background-color: #111117;
  padding: 8.125rem 0 9.375rem;
  color: white;
  .col-different,
  .col-equal {
    width: 15rem;
    ul {
      list-style: none;
      padding-left: 0;
      li {
        margin: 0.5rem 0;
      }
    }
    img {
      max-width: 10.625rem;
    }
    .read-more {
      color: inherit;
      border: 0.125rem solid #058283;
      text-decoration: none;
    }
  }
  .col-equal {
    background-color: #19191f;
  }
}
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
