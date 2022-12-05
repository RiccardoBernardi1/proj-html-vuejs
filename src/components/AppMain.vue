<script>
import FirstSection from "./MainComponents/FirstSection.vue";
import SecondSection from "./MainComponents/SecondSection.vue";
import ThirdSection from "./MainComponents/ThirdSection.vue";
export default {
  name: "AppMain",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
  },
};
</script>

<template>
  <main>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
  </main>
</template>

<style lang="scss" scoped></style>
