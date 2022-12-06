<template>
  <div class="section-card p-5 rounded-3">
    <div class="d-flex justify-content-between mb-3">
      <div
        class="icon rounded-circle d-flex justify-content-center align-items-center fs-4"
        v-html="info.icon"
      ></div>
      <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <h4 class="mb-3">{{ info.title }}</h4>
    <p>{{ info.text }}</p>
  </div>
</template>

<script>
export default {
  name: "SectionCard",
  props: {
    info: Object,
  },
};
</script>

<style lang="scss" scoped>
.section-card {
  background-color: #19191f;
  color: white;
  max-width: 21.875rem;
}
div.d-flex {
  .icon {
    color: #058283;
    background-color: #16282e;
    height: 3.75rem;
    width: 3.75rem;
  }
  a {
    color: #0f4e51;
  }
}
</style>
