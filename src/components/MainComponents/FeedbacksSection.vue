<template>
  <section id="feedbacks">
    <div class="container">
      <!-- titolo e paragrafo-->
      <WhiteTitle
        h6Text="CUSTOMER TESTIMONIALS"
        backgroundText="Feedback"
        normalText="Trusted"
        backgroundFirst="false"
        class="text-center"
      />
      <p class="mt-4 mb-5 text-center">
        We work intensively in search of ideals that can add up in the lives of
        our costumers. This is what moves us and we are grateful for the
        recognition.
      </p>
      <!-- /titolo e paragrafo-->
      <!-- cards -->
      <div class="feedbacks d-flex justify-content-between">
        <SectionCard
          v-for="feedback in feedbacks"
          :info="feedback"
          section="feedbacks"
        />
      </div>
      <!-- /cards -->
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
  data() {
    return {
      feedbacks: [
        {
          logo: "./src/assets/logo-1.png",
          firstText:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque est, rem dolorum sint totam, consequuntur exercitationem obcaecati facilis perspiciatis fugiat reiciendis?",
          secondText:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          logo: "./src/assets/logo-2.png",
          firstText:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque est, rem dolorum sint totam, consequuntur exercitationem obcaecati facilis perspiciatis fugiat reiciendis?",
          secondText:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          logo: "./src/assets/logo-3.png",
          firstText:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque est, rem dolorum sint totam, consequuntur exercitationem obcaecati facilis perspiciatis fugiat reiciendis?",
          secondText:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
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
