<template>
  <div class="second-section-top container">
    <WhiteTitle
      h6Text="ROAD TRANSPORT"
      backgroundText="Services"
      normalText="Main"
      backgroundFirst="false"
    />
    <div class="d-flex justify-content-between align-items-center">
      <p>
        With all of this expertise and capabilities comes an unrivalled
        commitment to costumer service. We will work hard to understand your
        needs in order to develop a productive, long-term partnership.
      </p>
      <a href="#footer" class="fw-normal read-more px-3 py-2 rounded"
        >SEE ALL</a
      >
    </div>
  </div>
</template>

<script>
import WhiteTitle from "../../WhiteTitle.vue";
export default {
  name: "SecondSectionTop",
  components: {
    WhiteTitle,
  },
};
</script>

<style lang="scss" scoped>
.second-section-top {
  color: white;
  p {
    max-width: 51.25rem;
    margin-top: 1.875rem;
  }
  a {
    color: white;
    text-decoration: none;
    &.read-more {
      border: 0.125rem solid #058283;
    }
  }
}
</style>
