<template>
  <!-- step process -->
  <div class="process-step text-center">
    <div
      class="number fs-5 fw-normal rounded-circle m-auto d-flex justify-content-center align-items-center"
    >
      <span>0{{ stepNum }}</span>
    </div>
    <h4 class="my-3">{{ info.title }}</h4>
    <p>{{ info.text }}</p>
  </div>
  <!-- /step process -->
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
    span {
      position: absolute;
      z-index: 10;
    }
    &::after,
    &::before {
      content: "";
      height: 0.3125rem;
      width: 100vw;
      background-color: #daeced;
      display: block;
      position: absolute;
      z-index: 0;
    }
  }
}
</style>
