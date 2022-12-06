<script>
import HeaderTop from "./HeaderComponents/HeaderTop.vue";
import HeaderBottom from "./HeaderComponents/HeaderBottom.vue";
export default {
  name: "AppHeader",
  components: {
    HeaderTop,
    HeaderBottom,
  },
};
</script>

<template>
  <header id="header">
    <HeaderTop />
    <HeaderBottom />
  </header>
</template>

<style lang="scss" scoped></style>
