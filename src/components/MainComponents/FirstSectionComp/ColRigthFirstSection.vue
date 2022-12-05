<template>
  <div class="col-right">
    <h4 class="fw-bold mb-5">Vehicle Types</h4>
    <div class="vehicle-types">
      <div class="d-flex truck align-items-center pb-2">
        <div class="truck-img">
          <img src="../../../assets/truck-1.png" alt="Truck image" />
        </div>
        <div class="truck-text ms-3">
          <h5 class="fw-bold fs-4">Light</h5>
          <span>Max Weight 1200 Kg</span>
        </div>
      </div>
      <div class="d-flex truck align-items-center py-2">
        <div class="truck-img">
          <img src="../../../assets/truck-1.png" alt="Truck image" />
        </div>
        <div class="truck-text ms-3">
          <h5 class="fw-bold fs-4">Medium</h5>
          <span>Max Weight 6000 Kg</span>
        </div>
      </div>
      <div class="d-flex truck align-items-center pt-2">
        <div class="truck-img">
          <img src="../../../assets/truck-1.png" alt="Truck image" />
        </div>
        <div class="truck-text ms-3">
          <h5 class="fw-bold fs-4">Heavy</h5>
          <span>Max Weight 24000 Kg</span>
        </div>
      </div>
    </div>
    <h4 class="fw-bold my-4">Certifications</h4>
    <div class="certifications">
      <img class="me-4" src="../../../assets/certificate.png" alt="" />
      <img src="../../../assets/certificate.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ColRigthFirstSection",
};
</script>

<style lang="scss" scoped>
.truck:not(:last-child) {
  border-bottom: 0.1875rem solid #bfbfbf;
}
.truck-img {
  background-color: #daeced;
  margin-bottom: 3.75rem;
  img {
    width: 5rem;
    padding: 0.3125rem;
  }
}
.certifications img {
  max-width: 8.75rem;
}
</style>
