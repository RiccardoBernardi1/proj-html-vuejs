<script>
import FirstSection from "./MainComponents/FirstSection.vue";
import SecondSection from "./MainComponents/SecondSection.vue";
import ThirdSection from "./MainComponents/ThirdSection.vue";
import FourthSection from "./MainComponents/FourthSection.vue";
import FifthSection from "./MainComponents/FifthSection.vue";
export default {
  name: "AppMain",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
  },
};
</script>

<template>
  <main>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
  </main>
</template>

<style lang="scss" scoped></style>
