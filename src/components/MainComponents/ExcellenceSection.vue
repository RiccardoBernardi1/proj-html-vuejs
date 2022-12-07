<template>
  <section class="container d-flex justify-content-between" id="transport">
    <ColLeftFirstSection />
    <ColRightFirstSection />
  </section>
</template>

<script>
import ColLeftFirstSection from "./ExcellenceSectionComp/ColLeftExcellenceSection.vue";
import ColRightFirstSection from "./ExcellenceSectionComp/ColRigthExcellenceSection.vue";
export default {
  name: "FirstSection",
  components: {
    ColLeftFirstSection,
    ColRightFirstSection,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 8.125rem 0 9.375rem;
}
</style>
