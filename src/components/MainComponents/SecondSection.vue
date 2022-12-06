<template>
  <section>
    <SecondSectionTop />
    <div class="section-cards d-flex justify-content-between container mt-5">
      <SectionCard v-for="service in services" :info="service" />
    </div>
  </section>
</template>

<script>
import SecondSectionTop from "./SecondSectionComp/SecondSectionTop.vue";
import SectionCard from "../MainComponents/SectionCard.vue";
export default {
  name: "SecondSection",
  components: {
    SecondSectionTop,
    SectionCard,
  },
  data() {
    return {
      services: [
        {
          icon: `<i class="fa-solid fa-truck-ramp-box"></i>`,
          title: "Tecnology",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque numquamdolores quod, quae optio libero delectus error dolorum, molestias nisi hicquos quibusdam eaque fugiat",
        },
        {
          icon: `<i class="fa-solid fa-temperature-empty"></i>`,
          title: "Reefer Cargo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque numquamdolores quod, quae optio libero delectus error dolorum, molestias nisi hicquos quibusdam eaque fugiat",
        },
        {
          icon: `<i class="fa-solid fa-boxes-stacked"></i>`,
          title: "Dry Cargo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque numquamdolores quod, quae optio libero delectus error dolorum, molestias nisi hicquos quibusdam eaque fugiat",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #111117;
  padding: 8.125rem 0 9.375rem;
}
</style>
