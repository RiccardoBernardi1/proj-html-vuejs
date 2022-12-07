<template>
  <!-- card sezione servizi -->
  <div class="services-card p-5 rounded-3" v-if="section === 'services'">
    <div class="d-flex justify-content-between mb-3">
      <div
        class="icon rounded-circle d-flex justify-content-center align-items-center fs-4"
        v-html="info.icon"
      ></div>
      <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <h4 class="mb-3 fw-bold">{{ info.title }}</h4>
    <p>{{ info.text }}</p>
  </div>
  <!-- /card sezione servizi -->
  <!-- card sezione feedbacks -->
  <div class="feedbacks-card p-5 rounded-3" v-else-if="section === 'feedbacks'">
    <img :src="info.logo" alt="logo" class="mb-3" />
    <p class="mb-3">{{ info.firstText }}</p>
    <p>{{ info.secondText }}</p>
    <i class="fa-solid fa-quote-right fs-3"></i>
  </div>
  <!-- /card sezione feedbacks -->
</template>

<script>
export default {
  name: "SectionCard",
  props: {
    info: Object,
    section: String,
  },
};
</script>

<style lang="scss" scoped>
.services-card,
.feedbacks-card {
  background-color: #19191f;
  color: white;
  max-width: 21.875rem;
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
    p {
      color: #b6c3d0;
    }
  }
}
.feedbacks-card {
  position: relative;
  img {
    max-width: 8.125rem;
    filter: invert(1);
  }
  i {
    position: absolute;
    bottom: 2.1875rem;
    right: 1.25rem;
    color: #47474c;
  }
}
</style>
