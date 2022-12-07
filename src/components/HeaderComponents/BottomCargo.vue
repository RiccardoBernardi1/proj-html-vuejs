<template>
  <div class="bottom-cargo">
    <h4>LOGISTIC SERVICES</h4>
    <h1 class="mb-4">CARGO TRANSPORT</h1>
    <p class="mb-5">
      Fractional or exclusive road cargo transportation to all regions, with
      small, medium and large vehicles.
    </p>
    <a href="#get-in-touch" class="btn me-4 rounded">GET IN TOUCH</a>
    <a href="#transport" class="read-more rounded">READ MORE</a>
  </div>
</template>

<script>
export default {
  name: "BottomCargo",
};
</script>

<style lang="scss" scoped>
.bottom-cargo {
  max-width: 32.5rem;
  margin-top: 9.375rem;
  padding-bottom: 16.25rem;
  h4 {
    color: #00a1a1;
  }
  h1 {
    color: white;
    font-size: 4.375rem;
    font-weight: bold;
  }
  p {
    color: #918882;
  }
  a {
    text-decoration: none;
    color: white;
    &.btn {
      background-color: #058283;
      border: 0.125rem solid #058283;
      padding: 0.625rem 1.5625rem 0.9375rem;
    }
    &.read-more {
      border: 0.125rem solid #058283;
      padding: 0.625rem 1.5625rem 0.9375rem;
    }
  }
}
</style>
