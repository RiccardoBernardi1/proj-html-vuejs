<template>
  <!-- parte superiore header -->
  <div class="header-top py-3">
    <!-- orario , numero di telefono , mail e social -->
    <div class="container d-flex align-items-center">
      <div v-for="obj in store.info" class="info">
        <span v-html="obj.icon" class="me-2"></span> {{ obj.text }}
      </div>
      <a
        :href="icon.href"
        v-html="icon.icon"
        v-for="icon in icons"
        class="info"
      ></a>
    </div>
    <!-- /orario , numero di telefono , mail e social -->
  </div>
  <!-- /parte superiore header -->
</template>

<script>
import { store } from "../../store.js";
export default {
  name: "HeaderTop",
  data() {
    return {
      store,
      icons: [
        {
          icon: `<i class="fa-brands fa-facebook "></i>`,
          href: "https://it-it.facebook.com/login.php/",
        },
        {
          icon: `<i class="fa-brands fa-twitter "></i>`,
          href: "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiaXQifQ%3D%3D%22%7D",
        },
        {
          icon: `<i class="fa-brands fa-linkedin"></i>`,
          href: "https://www.linkedin.com/login/it",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-top {
  background-color: #21333e;
  color: white;
  .info {
    color: white;
  }
  .info:first-child {
    margin-right: auto;
  }
  .info:not(:first-child, :last-child) {
    margin-right: 2.1875rem;
  }
}
</style>
