<template>
  <div class="footer-top">
    <div class="container d-flex justify-content-between">
      <div class="col-different">
        <img src="../../assets/logo.svg" alt="Logo NexGen" />
        <p class="mt-4">A Functional HTML template for Corporate & Business.</p>
        <div class="mb-3 info" v-for="obj in info">
          <span v-html="obj.icon" class="me-2"></span> {{ obj.text }}
        </div>
        <a href="#get-in-touch" class="fw-bold read-more px-3 py-2 rounded mt-4"
          >GET IN TOUCH</a
        >
      </div>
      <FooterCard :info="obj" v-for="obj in cardsInfo" />
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
import FooterCard from "../FooterComponents/FooterCard.vue";
export default {
  name: "FooterTop",
  data() {
    return {
      store,
      cardsInfo: [
        {
          title: "About",
          list: [
            "The Company",
            "Institutional",
            "Socuial & Events",
            "Innovation",
            "Enviromnent",
            "Tecnology",
          ],
        },
        {
          title: "Transport",
          list: [
            "Industrialized",
            "Chemicals",
            "Packaged Liquids",
            "Construction",
            "Laminated Woods",
            "And Others",
          ],
        },
        {
          title: "Support",
          list: [
            "Responsibility",
            "Terms of Use",
            "About Cookies",
            "Privacy Policy",
            "Accessibility",
            "Information",
          ],
        },
      ],
      info: [
        {
          icon: store.info[1].icon,
          text: store.info[1].text,
        },
        {
          icon: store.info[2].icon,
          text: store.info[2].text,
        },
        {
          icon: `<i class="fa-solid fa-location-dot"></i>`,
          text: "Main Avenue, 987",
        },
      ],
    };
  },
  components: {
    FooterCard,
  },
};
</script>

<style lang="scss" scoped>
.footer-top {
  background-color: #111117;
  padding: 8.125rem 0 9.375rem;
  color: white;
  .col-different {
    width: 15rem;
    img {
      max-width: 10.625rem;
    }
    .read-more {
      color: inherit;
      border: 0.125rem solid #058283;
      text-decoration: none;
      display: inline-block;
    }
  }
}
</style>
