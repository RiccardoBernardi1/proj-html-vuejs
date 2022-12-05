<template>
  <section>
    <div class="container text-center">
      <h6 class="fw-bold">WHAT ARE WE DOING</h6>
      <h2 class="fw-bold"><span>Results</span> in Numbers</h2>
      <div class="results d-flex">
        <ResultCard v-for="n in 4" />
      </div>
    </div>
  </section>
</template>

<script>
import ResultCard from "../FourthSectionComp/ResultCard.vue";
export default {
  name: "FourthSection",
  components: {
    ResultCard,
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("../../assets/bg-10.jpg");
  background-position: center;
  padding: 8.125rem 0 9.375rem;
  color: white;
  h2 {
    margin-bottom: 7.5rem;
  }
  .results {
    width: 100%;
    justify-content: space-around;
  }
}
</style>
