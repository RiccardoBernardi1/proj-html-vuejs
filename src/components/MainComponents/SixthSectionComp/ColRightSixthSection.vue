<template>
  <div class="col-right ms-3">
    <h4 class="mb-4">Example inc.</h4>
    <p class="mb-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </p>
    <p class="mb-4">
      Error ipsa molestiae vero delectus corporis doloribus officiis
    </p>
    <div class="d-flex align-items-center info" v-for="obj in info">
      <div
        class="circle fs-5 fw-bold rounded-circle d-flex justify-content-center align-items-center me-3"
        v-html="obj.icon"
      ></div>
      <span>{{ obj.text }}</span>
    </div>
    <a
      href="#"
      class="fw-normal read-more px-3 py-2 rounded"
      @click.prevent="$emit('show'), (clicked = !clicked)"
      v-if="clicked === false"
      >VIEW MAP</a
    >
    <a
      href="#"
      class="fw-normal read-more px-3 py-2 rounded"
      @click.prevent="$emit('show'), (clicked = !clicked)"
      v-else
      >HIDE MAP</a
    >
  </div>
</template>

<script>
import { store } from "../../../store.js";
export default {
  name: "ColRightSixthSection",
  data() {
    return {
      store,
      clicked: false,
      info: [
        {
          icon: store.info[1].icon,
          text: store.info[1].text,
        },
        {
          icon: store.info[2].icon,
          text: store.info[2].text,
        },
        {
          icon: `<i class="fa-solid fa-location-dot"></i>`,
          text: "Main Avenue, 987",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.col-right {
  max-width: 21.25rem;
  .info {
    color: #05848a;

    margin-bottom: 1.5625rem;
  }
  .circle {
    width: 3.125rem;
    height: 3.125rem;
    color: #05848a;
    background-color: #daeced;
    position: relative;
  }
  .read-more {
    color: #058283;
    border: 0.125rem solid #058283;
    text-decoration: none;
  }
}
</style>
