<template>
  <section>
    <SecondSectionTop />
    <div class="section-cards d-flex justify-content-between container mt-5">
      <SectionCard v-for="n in 3" />
    </div>
  </section>
</template>

<script>
import SecondSectionTop from "./SecondSectionComp/SecondSectionTop.vue";
import SectionCard from "../MainComponents/SectionCard.vue";
export default {
  name: "SecondSection",
  components: {
    SecondSectionTop,
    SectionCard,
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #111117;
  padding: 8.125rem 0 9.375rem;
}
</style>
