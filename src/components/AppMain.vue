<script>
import FirstSection from "./MainComponents/FirstSection.vue";
import SecondSection from "./MainComponents/SecondSection.vue";
export default {
  name: "AppMain",
  components: {
    FirstSection,
    SecondSection,
  },
};
</script>

<template>
  <main>
    <FirstSection />
    <SecondSection />
  </main>
</template>

<style lang="scss" scoped></style>
