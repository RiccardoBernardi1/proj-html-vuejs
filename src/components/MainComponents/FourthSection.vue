<template>
  <section>
    <div class="container text-center">
      <WhiteTitle
        h6Text="WHAT ARE WE DOING"
        backgroundText="Results"
        normalText="in Numbers"
        backgroundFirst="first"
      />
      <div class="results d-flex">
        <ResultCard v-for="n in 4" />
      </div>
    </div>
  </section>
</template>

<script>
import WhiteTitle from "../WhiteTitle.vue";
import ResultCard from "./FourthSectionComp/ResultCard.vue";
export default {
  name: "FourthSection",
  components: {
    WhiteTitle,
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

  .white-title {
    margin-bottom: 7.5rem;
  }
  .results {
    width: 100%;
    justify-content: space-around;
  }
}
</style>
