<template>
  <div class="col-right">
    <h4 class="fw-bold mb-4">Example inc.</h4>
    <p class="mb-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </p>
    <p class="mb-4">
      Error ipsa molestiae vero delectus corporis doloribus officiis
    </p>
    <div class="d-flex align-items-center info">
      <div
        class="circle fs-5 fw-bold rounded-circle d-flex justify-content-center align-items-center me-3"
      >
        <i class="fa-solid fa-phone"></i>
      </div>
      <span>+1 (305) 1234-5678</span>
    </div>
    <div class="d-flex align-items-center info">
      <div
        class="circle fs-5 fw-bold rounded-circle d-flex justify-content-center align-items-center me-3"
      >
        <i class="fa-solid fa-envelope"></i>
      </div>
      <span>hello@example.com</span>
    </div>
    <div class="d-flex align-items-center info mb-5">
      <div
        class="circle fs-5 fw-bold rounded-circle d-flex justify-content-center align-items-center me-3"
      >
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <span>Main Avenue, 987</span>
    </div>
    <a href="#" class="fw-bold read-more px-3 py-2 rounded">VIEW MAP</a>
  </div>
</template>

<script>
export default {
  name: "ColRightSixthSection",
};
</script>

<style lang="scss" scoped>
.col-right {
  max-width: 21.875rem;
  .info {
    color: #05848a;

    margin-bottom: 1.5625rem;
  }
  .circle {
    width: 3.125rem;
    height: 3.125rem;
    color: #05848a;
    background-color: #daeced;
    position: relative;
  }
  .read-more {
    color: #058283;
    border: 0.125rem solid #058283;
    text-decoration: none;
  }
}
</style>
