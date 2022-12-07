<template>
  <!-- componente risultato -->
  <div class="result-card text-center">
    <div class="num fs-2 fw-bold mb-3">{{ info.quantity }}</div>
    <h4 class="fw-bold">{{ info.type }}</h4>
  </div>
  <!-- /componente risultato -->
</template>

<script>
export default {
  name: "ResultCard",
  props: {
    info: Object,
  },
};
</script>

<style lang="scss" scoped>
.num {
  color: #00a6a6;
}
</style>
