<script>
import FirstSection from "./MainComponents/FirstSection.vue";
import SecondSection from "./MainComponents/SecondSection.vue";
import ThirdSection from "./MainComponents/ThirdSection.vue";
import FourthSection from "./MainComponents/FourthSection.vue";
export default {
  name: "AppMain",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
  },
};
</script>

<template>
  <main>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
  </main>
</template>

<style lang="scss" scoped></style>
