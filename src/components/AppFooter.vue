<template>
  <footer>
    <FooterTop />
    <FooterBottom />
  </footer>
</template>

<script>
import FooterTop from "./FooterComponents/FooterTop.vue";
import FooterBottom from "./FooterComponents/FooterBottom.vue";
export default {
  name: "AppFooter",
  components: {
    FooterTop,
    FooterBottom,
  },
};
</script>

<style lang="scss" scoped></style>
