<template>
  <section class="container d-flex justify-content-between">
    <ColLeftFirstSection />
    <ColRightFirstSection />
  </section>
</template>

<script>
import ColLeftFirstSection from "./FirstSectionComp/ColLeftFirstSection.vue";
import ColRightFirstSection from "./FirstSectionComp/ColRigthFirstSection.vue";
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
