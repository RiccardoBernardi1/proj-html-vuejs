<template>
  <div class="second-section-top container">
    <h6 class="fw-bold">ROAD TRANSPORT</h6>
    <h2 class="fw-bold">Main <span>Services</span></h2>
    <div class="d-flex justify-content-between align-items-center">
      <p>
        With all of this expertise and capabilities comes an unrivalled
        commitment to costumer service. We will work hard to understand your
        needs in order to develop a productive, long-term partnership.
      </p>
      <a href="#" class="fw-bold read-more px-3 py-2 rounded">SEE ALL</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondSectionTop",
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
