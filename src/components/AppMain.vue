<script>
import FirstSection from "./MainComponents/FirstSection.vue";
import SecondSection from "./MainComponents/SecondSection.vue";
import ThirdSection from "./MainComponents/ThirdSection.vue";
import FourthSection from "./MainComponents/FourthSection.vue";
import FifthSection from "./MainComponents/FifthSection.vue";
import SixthSection from "./MainComponents/SixthSection.vue";
export default {
  name: "AppMain",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    SixthSection,
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
    <SixthSection />
  </main>
</template>

<style lang="scss" scoped></style>
