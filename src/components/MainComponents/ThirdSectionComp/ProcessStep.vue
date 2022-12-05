<template>
  <div class="process-step text-center">
    <div
      class="number fs-4 fw-bold rounded-circle m-auto d-flex justify-content-center align-items-center"
    >
      01
    </div>
    <h4 class="fw-bold my-3">Collection of information</h4>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
  </div>
</template>

<script>
export default {
  name: "ProcessStep",
};
</script>

<style lang="scss" scoped>
.process-step {
  max-width: 14.375rem;
  .number {
    width: 2.5rem;
    height: 2.5rem;
    color: #05848a;
    background-color: #daeced;
    position: relative;
    &::after,
    &::before {
      content: "";
      height: 0.3125rem;
      width: 100vw;
      background-color: #daeced;
      display: block;
      position: absolute;
      z-index: -1;
    }
  }
}
</style>
