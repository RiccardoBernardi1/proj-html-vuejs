<script>
import FirstSection from "./MainComponents/ExcellenceSection.vue";
import SecondSection from "./MainComponents/ServiceSection.vue";
import ThirdSection from "./MainComponents/ProcessSection.vue";
import FourthSection from "./MainComponents/ResultsSection.vue";
import FifthSection from "./MainComponents/FeedbacksSection.vue";
import SixthSection from "./MainComponents/FormSection.vue";
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
