<template>
  <section>
    <div class="container">
      <div class="col-left">
        <h6 class="fw-bold">SEND A MESSAGE</h6>
        <h2 class="fw-bold mb-4">Get in <span>Touch</span></h2>
        <span>We will respond to your message as soon as possible.</span>
        <SectionForm />
      </div>
    </div>
  </section>
</template>

<script>
import SectionForm from "./SixthSectionComp/SectionForm.vue";
export default {
  name: "SixthSection",
  components: {
    SectionForm,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 8.125rem 9.375rem;
  .col-left {
    max-width: 45rem;
  }
  h2 span {
    color: #058283;
    padding: 0.5rem 1rem;
    background-color: #daeced;
  }
}
</style>
