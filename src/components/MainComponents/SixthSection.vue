<template>
  <section id="get-in-touch">
    <div class="container d-flex justify-content-between flex-wrap">
      <div class="col-left">
        <h6 class="fw-bold">SEND A MESSAGE</h6>
        <h2 class="fw-bold mb-4">Get in <span>Touch</span></h2>
        <span>We will respond to your message as soon as possible.</span>
        <SectionForm class="mt-5" />
      </div>
      <ColRightSixthSection @show="showMap" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.9777008717393!2d-74.13557491620767!3d40.87052819989804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fec8aa3213e5%3A0xab6c00ef8f54a598!2s987%20Main%20Ave%2C%20Passaic%2C%20NJ%2007055%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1670365050584!5m2!1sit!2sit"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="m-auto"
        v-show="clicked"
      ></iframe>
    </div>
  </section>
</template>

<script>
import SectionForm from "./SixthSectionComp/SectionForm.vue";
import ColRightSixthSection from "./SixthSectionComp/ColRightSixthSection.vue";
export default {
  name: "SixthSection",
  components: {
    SectionForm,
    ColRightSixthSection,
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    showMap() {
      this.clicked = !this.clicked;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 8.125rem 9.375rem;
  .col-left {
    max-width: 45rem;
    h2 span {
      color: #058283;
      padding: 0.5rem 1rem;
      background-color: #daeced;
    }
  }
}
</style>
