<template>
  <div class="header-bottom-image">
    <div class="header-bottom-color">
      <div class="container">
        <HeaderNav />
        <BottomCargo />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import BottomCargo from "./BottomCargo.vue";
export default {
  name: "HeaderBottom",
  components: {
    HeaderNav,
    BottomCargo,
  },
};
</script>

<style lang="scss" scoped>
.header-bottom-image {
  background-image: url("../../assets/bg-9.jpg");
  .header-bottom-color {
    background-color: rgba($color: #000000, $alpha: 0.7);
  }
}
</style>
