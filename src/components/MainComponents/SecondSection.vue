<template>
  <section id="services">
    <SecondSectionTop />
    <div class="section-cards d-flex justify-content-between container mt-5">
      <SectionCard
        v-for="service in services"
        :info="service"
        section="services"
      />
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
          text: "We are continually focused on developing tecnology solutions adapted to our client needs.",
        },
        {
          icon: `<i class="fa-solid fa-temperature-empty"></i>`,
          title: "Reefer Cargo",
          text: "Regular and frequent monitoring from the receipt of the loaded container to final destination.",
        },
        {
          icon: `<i class="fa-solid fa-boxes-stacked"></i>`,
          title: "Dry Cargo",
          text: "We work for most types of dry cargo, from valuable cargo to most dangerous requiring care.",
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
