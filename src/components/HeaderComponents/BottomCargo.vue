<template>
  <div class="bottom-cargo">
    <h4>LOGISTIC SERVICES</h4>
    <h1 class="mb-4">CARGO TRANSPORT</h1>
    <p class="mb-5">
      Fractional or exclusive road cargo transportation to all regions, with
      small, medium and large vehicles.
    </p>
    <a href="#" class="fw-bold get-in-touch px-3 py-2 me-4 rounded"
      >GET IN TOUCH</a
    >
    <a href="#" class="fw-bold read-more px-3 py-2 rounded">READ MORE</a>
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
    &.get-in-touch {
      background-color: #058283;
      border: 0.125rem solid #058283;
    }
    &.read-more {
      border: 0.125rem solid #058283;
    }
  }
}
</style>
