<template>
  <form action="" @submit.prevent class="row g-3 justify-content-between">
    <input type="text" placeholder="Name" required />
    <input type="email" name="" id="" placeholder="Email" required />
    <input type="tel" name="" id="" placeholder="Phone" required />
    <select name="message-type" id="message-type">
      <option value="More" selected>More info</option>
      <option value="report">Report an issue</option>
      <option value="ask">Ask for help</option>
    </select>
    <textarea
      name="Message-text"
      id="Message-text"
      cols="30"
      rows="10"
      placeholder="Message"
      class="mb-4"
    ></textarea>
    <button class="fw-bold px-3 py-1 rounded">SEND</button>
  </form>
</template>

<script>
export default {
  name: "FormSection",
};
</script>

<style lang="scss" scoped>
form {
  overflow-y: hidden;
  input,
  select {
    background-color: #ececec;
    min-height: 2.8125rem;
    width: 49%;
    border-radius: 0.3125rem;
    outline: none;
    border: none;
  }
  textarea {
    max-height: 9.375rem;
    overflow-y: auto;
    outline: none;
    border-radius: 0.3125rem;
    background-color: #ececec;
    border: none;
    min-height: 1.5625rem;
  }
  button {
    background-color: #058283;
    border: 0.125rem solid #058283;
    color: white;
    max-width: 6.25rem;
  }
}
</style>
