<template>
  <div class="process-step text-center">
    <div
      class="number fs-4 fw-bold rounded-circle m-auto d-flex justify-content-center align-items-center"
    >
      0{{ stepNum }}
    </div>
    <h4 class="fw-bold my-3">{{ info.title }}</h4>
    <p>{{ info.text }}</p>
  </div>
</template>

<script>
export default {
  name: "ProcessStep",
  props: {
    info: Object,
    stepNum: Number,
  },
};
</script>

<style lang="scss" scoped>
.process-step {
  max-width: 14.375rem;
  .number {
    width: 3.125rem;
    height: 3.125rem;
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
