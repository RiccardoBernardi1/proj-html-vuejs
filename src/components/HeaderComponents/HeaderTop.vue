<template>
  <div class="header-top py-3">
    <div class="container d-flex align-items-center">
      <div v-for="obj in info" class="info">
        <span v-html="obj.icon"></span> {{ obj.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      info: [
        {
          icon: `<i class="fa-solid me-2 fa-clock"></i>`,
          text: "Open Hours: Mon - Sat - 9:00 - 18:00",
        },
        {
          icon: `<i class="fa-solid me-2 fa-phone"></i>`,
          text: "+1(305) 1234-5678",
        },
        {
          icon: `<i class="fa-solid me-2 fa-envelope"></i>`,
          text: "hello@example.com",
        },
        {
          icon: `<i class="fa-brands fa-facebook "></i>`,
        },
        {
          icon: `<i class="fa-brands fa-twitter "></i>`,
        },
        {
          icon: `<i class="fa-brands fa-linkedin"></i>`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-top {
  background-color: #21333e;
  color: white;
  .info:first-child {
    margin-right: auto;
  }
  .info:not(:first-child, :last-child) {
    margin-right: 2.1875rem;
  }
}
</style>
