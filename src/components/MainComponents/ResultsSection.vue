<template>
  <section>
    <div class="container text-center">
      <!-- titolo -->
      <WhiteTitle
        h6Text="WHAT ARE WE DOING"
        backgroundText="Results"
        normalText="in Numbers"
        backgroundFirst="first"
      />
      <!-- /titolo -->
      <!-- risultati -->
      <div class="results d-flex">
        <ResultCard v-for="result in results" :info="result" />
      </div>
      <!-- /risultati -->
    </div>
  </section>
</template>

<script>
import WhiteTitle from "../WhiteTitle.vue";
import ResultCard from "./ResultsSectionComp/ResultCard.vue";
export default {
  name: "FourthSection",
  components: {
    WhiteTitle,
    ResultCard,
  },
  data() {
    return {
      results: [
        {
          quantity: "128",
          type: "Certifications",
        },
        {
          quantity: "230",
          type: "Employees",
        },
        {
          quantity: "517",
          type: "Costumers",
        },
        {
          quantity: "94",
          type: "Country Served",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("../../assets/bg-10.jpg");
  background-position: center;
  padding: 8.125rem 0 9.375rem;
  color: white;

  .white-title {
    margin-bottom: 7.5rem;
  }
  .results {
    width: 100%;
    justify-content: space-around;
  }
}
</style>
