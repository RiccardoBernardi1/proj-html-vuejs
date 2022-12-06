<template>
  <section class="text-center" id="process">
    <h6 class="fw-bold">HOW IT WORKS IN PRACTICE</h6>
    <h2 class="fw-bold mb-4"><span>Logistical</span> Procedure</h2>
    <p>
      We work for innovative methodologies to ensure that the entire delivery
      process is done from start to finish as planned.
    </p>
    <div class="process mt-5 d-flex justify-content-around">
      <ProcessStep v-for="(step, i) in steps" :info="step" :stepNum="i + 1" />
    </div>
  </section>
</template>

<script>
import ProcessStep from "./ThirdSectionComp/ProcessStep.vue";
export default {
  name: "ThirdSection",
  components: {
    ProcessStep,
  },
  data() {
    return {
      steps: [
        {
          title: "Collection of Inforamation",
          text: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          title: "Service Invoice Sending",
          text: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          title: "Withdraw of Cargo",
          text: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          title: "Transport Customer Order",
          text: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          title: "Successful Delivery",
          text: "Lorem ipsum dolor sit amet consectetur.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 8.125rem 9.375rem;
  overflow: hidden;
  h2 span {
    color: #058283;
    padding: 0.5rem 1rem;
    background-color: #daeced;
  }
  p {
    max-width: 47.8125rem;
    margin: auto;
    padding-top: 0.375rem;
  }
}
</style>
