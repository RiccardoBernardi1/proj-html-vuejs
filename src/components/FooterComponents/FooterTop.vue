<template>
  <div class="footer-top">
    <div class="container d-flex justify-content-between">
      <div class="col-different">
        <img src="../../assets/logo.svg" alt="Logo NexGen" />
        <p class="mt-4">A Functional HTML template for Corporate & Business.</p>
        <div class="mb-3 info" v-for="obj in info">
          <span v-html="obj.icon" class="me-2"></span> {{ obj.text }}
        </div>
        <a
          href="#get-in-touch"
          class="fw-normal read-more px-3 py-2 rounded mt-4"
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
            {
              title: "The Company",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Institutional",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Social & Events",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Innovation",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Enviromnent",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Tecnology",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
          ],
        },
        {
          title: "Transport",
          list: [
            {
              title: "Industrialized",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Chemicals",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Packaged Liquids",

              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Construction",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Laminated Woods",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "And Others",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
          ],
        },
        {
          title: "Support",
          list: [
            {
              title: "Responsibility",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Terms of Use",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "About Cookies",

              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Privacy Policy",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Accessibility",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
            {
              title: "Information",
              onClickText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis porro aliquam itaque velit magnam.",
            },
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
  color: #c0c3d0;

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
