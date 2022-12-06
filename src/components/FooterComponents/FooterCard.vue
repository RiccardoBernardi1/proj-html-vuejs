<template>
  <div class="col-equal p-5 rounded-3">
    <h4 class="fw-bold mb-3">{{ info.title }}</h4>
    <ul>
      <li v-for="li in info.list">
        <i class="fa-solid fa-chevron-right"></i> {{ li }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterCard",
  props: {
    info: Object,
  },
};
</script>

<style lang="scss" scoped>
.col-equal {
  background-color: #19191f;
  width: 15rem;
  ul {
    list-style: none;
    padding-left: 0;
    li {
      margin: 0.5rem 0;
    }
  }
}
</style>
