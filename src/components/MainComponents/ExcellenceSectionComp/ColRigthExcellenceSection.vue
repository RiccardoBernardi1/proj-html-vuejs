<template>
  <!-- colonna destra contenente immagini e descrizioni mezzi di trasporto -->
  <div class="col-right">
    <h4 class="mb-5">Vehicle Types</h4>
    <div class="vehicle-types">
      <div class="d-flex truck align-items-center py-3" v-for="truck in trucks">
        <div class="truck-img">
          <img :src="truck.img" alt="Truck image" />
        </div>
        <div class="truck-text ms-3">
          <h5 class="fs-4">{{ truck.name }}</h5>
          <span>{{ truck.weight }}</span>
        </div>
      </div>
    </div>
    <h4 class="my-4">Certifications</h4>
    <div class="certifications">
      <img
        class="certificates"
        :src="certificate"
        alt="Certificate image"
        v-for="certificate in certificates"
      />
    </div>
  </div>
  <!-- /colonna destra contenente immagini e descrizioni mezzi di trasporto -->
</template>

<script>
export default {
  name: "ColRigthFirstSection",
  data() {
    return {
      trucks: [
        {
          img: "./src/assets/truck-1.png",
          name: "Light",
          weight: "Max Weight 1200 Kg",
        },
        {
          img: "./src/assets/truck-1.png",
          name: "Medium",
          weight: "Max Weight 6000 Kg",
        },
        {
          img: "./src/assets/truck-1.png",
          name: "Heavy",
          weight: "Max Weight 24000 Kg",
        },
      ],
      certificates: [
        "./src/assets/certificate.png",
        "./src/assets/certificate.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.vehicle-types {
  margin-bottom: 3.75rem;
  .truck {
    &:not(:last-child) {
      border-bottom: 0.1875rem solid #bfbfbf;
    }
    .truck-img {
      background-color: #daeced;
      img {
        width: 6.25rem;
        padding: 0.3125rem;
      }
    }
  }
}
.certificates {
  &:not(:last-child) {
    margin-right: 1.25rem;
    box-shadow: 0.0313rem 0.0313rem 0.0625rem black;
  }
  &:last-child {
    box-shadow: -0.0313rem 0.0313rem 0.0625rem black;
  }
}
.certifications img {
  max-width: 8.75rem;
}
</style>
