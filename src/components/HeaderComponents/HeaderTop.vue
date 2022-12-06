<template>
  <div class="header-top py-3">
    <div class="container d-flex align-items-center">
      <div v-for="obj in store.info" class="info">
        <span v-html="obj.icon" class="me-2"></span> {{ obj.text }}
      </div>
      <span v-html="icon" v-for="icon in icons" class="info"></span>
    </div>
  </div>
</template>

<script>
import { store } from "../../store.js";
export default {
  name: "HeaderTop",
  data() {
    return {
      store,
      icons: [
        `<i class="fa-brands fa-facebook "></i>`,
        `<i class="fa-brands fa-twitter "></i>`,
        `<i class="fa-brands fa-linkedin"></i>`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-top {
  background-color: #21333e;
  color: white;
  .info:first-child {
    margin-right: auto;
  }
  .info:not(:first-child, :last-child) {
    margin-right: 2.1875rem;
  }
}
</style>
