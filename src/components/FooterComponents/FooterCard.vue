<template>
  <div class="col-equal p-5 rounded-3">
    <h4 class="mb-3">{{ info.title }}</h4>
    <ul>
      <li v-for="(li, i) in info.list" @click="clickLi(info.title, i)">
        <i
          class="fa-solid fa-chevron-right me-2"
          :id="`${info.title}${i + 100}`"
        ></i>
        <span :id="`${info.title}${i + 300}`">{{ li.title }}</span>
        <div class="ms-d-none mt-1 py-1" :id="`${info.title}${i}`">
          {{ li.onClickText }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterCard",
  props: {
    info: Object,
  },
  data() {
    return {
      clicked: "",
    };
  },
  methods: {
    clickLi(sectionName, i) {
      if (this.clicked != `${sectionName}${i}`) {
        if (document.querySelector(".active") != null) {
          document.querySelector(".active").classList.remove("active");
          document.querySelector(".rotate").classList.remove("rotate");
          document.querySelector(".green-span").classList.remove("green-span");
        }
        document;
        document.getElementById(`${sectionName}${i}`).classList.add("active");
        document
          .getElementById(`${sectionName}${i + 100}`)
          .classList.add("rotate");
        document
          .getElementById(`${sectionName}${i + 300}`)
          .classList.add("green-span");

        this.clicked = `${sectionName}${i}`;
      } else {
        document
          .getElementById(`${sectionName}${i}`)
          .classList.remove("active");
        document
          .getElementById(`${sectionName}${i + 100}`)
          .classList.remove("rotate");
        document
          .getElementById(`${sectionName}${i + 300}`)
          .classList.remove("green-span");
        this.clicked = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.col-equal {
  background-color: #19191f;
  max-width: 15.625rem;

  ul {
    list-style: none;
    padding-left: 0;
    li {
      margin: 0.5rem 0;
      cursor: pointer;
      i {
        transition: transform 0.2s;
      }
      .rotate {
        transform: rotate(90deg);
      }
      .ms-d-none {
        display: none;
      }
      .active {
        display: block;
        border-top: 0.0625rem solid white;
      }
      .green-span {
        color: lightgreen;
      }
    }
  }
}
</style>
