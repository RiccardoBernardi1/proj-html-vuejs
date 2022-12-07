<template>
  <div class="white-title" v-if="backgroundFirst === 'first'">
    <h6 class="fw-bold">{{ h6text }}</h6>
    <h2 class="fw-bold">
      <span class="px-3 py-1">{{ backgroundText }}</span> {{ normalText }}
    </h2>
  </div>
  <div class="white-title" v-else>
    <h6 class="fw-bold">{{ h6text }}</h6>
    <h2 class="fw-bold">
      {{ normalText }} <span class="px-3 py-1">{{ backgroundText }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: "WhiteTitle",
  props: {
    h6text: String,
    backgroundText: String,
    normalText: String,
    backgroundFirst: String,
  },
};
</script>

<style lang="scss" scoped>
h6 {
  color: #21aaac;
  margin-bottom: 1.875rem;
}
h2 span {
  background-color: rgba($color: #0e272d, $alpha: 0.8);
}
h2 {
  font-size: 3.125rem;
  font-weight: bolder;
}
</style>
