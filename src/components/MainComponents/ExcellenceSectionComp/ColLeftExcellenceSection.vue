<template>
  <!-- colonna sinistra con titolo, paragrafi e lista -->
  <div class="col-left">
    <h6 class="fw-bold">WHO WE ARE</h6>
    <h2 class="fw-bold">
      <span><i class="fa-regular fa-gem"></i> Excellence</span> in Transport
    </h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio in fuga
      aut maiores laborum sit nostrum doloremque repudiandae tempora similique
      nam labore dolore temporibus, fugit quidem, natus quaerat dolores ad?
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quaerat
      nulla autem. Recusandae voluptatum ipsa deserunt, dicta blanditiis
      nostrum, rem veritatis ratione tempora, eius vero harum labore officiis
      ducimus iusto!
    </p>
    <p class="p-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sequi
      eius a soluta voluptatem placeat non ullam fugiat quis. Ab, distinctio.
      Quia sint rem placeat, nostrum qui repudiandae
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sed natus
      rem recusandae cumque deleniti
    </p>
    <ul>
      <li v-for="lorem in loremList">{{ lorem }}</li>
    </ul>
  </div>
  <!-- /colonna sinistra con titolo, paragrafi e lista -->
</template>

<script>
export default {
  name: "ColLeftFirstSection",
  data() {
    return {
      loremList: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipisicing elit",
        "Sint sed natus rem recusandae",
        "Delectus mollitia hic eaque",
        "Magnam alias quo non beatae",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.col-left {
  max-width: 46.875rem;
  h2 {
    font-size: 3.125rem;
  }
  h2 span {
    color: #058283;
    padding: 0.5rem 1rem;
    background-color: #daeced;
  }
  p {
    margin-top: 1.875rem;
    &.p-3 {
      border-left: 0.25rem solid #daeced;
    }
  }
  ul {
    padding-left: 0.8125rem;
    li {
      margin: 0.5rem 0;
    }
  }
}
</style>
