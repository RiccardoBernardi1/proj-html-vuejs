<template>
  <section>
    <div class="container text-center">
      <WhiteTitle
        h6Text="CUSTOMER TESTIMONIALS"
        backgroundText="Feedback"
        normalText="Trusted"
        backgroundFirst="false"
      />
      <p class="mt-4 mb-5">
        We work intensively in search of ideals that can add up in the lives of
        our costumers. This is what moves us and we are grateful for the
        recognition.
      </p>
      <div class="feedbacks d-flex justify-content-between">
        <SectionCard v-for="n in 3" />
      </div>
    </div>
  </section>
</template>

<script>
import WhiteTitle from "../WhiteTitle.vue";
import SectionCard from "./SectionCard.vue";
export default {
  name: "FifthSection",
  components: {
    WhiteTitle,
    SectionCard,
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #111117;
  color: white;
  padding: 8.125rem 0 9.375rem;
  p {
    max-width: 48.75rem;
    margin: auto;
  }
}
</style>
