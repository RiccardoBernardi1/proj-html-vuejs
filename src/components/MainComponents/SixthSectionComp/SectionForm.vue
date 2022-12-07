<template>
  <form action="" @submit.prevent class="row g-3 justify-content-between">
    <input type="text" placeholder="Name" required v-model="name" />
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email"
      required
      v-model="email"
    />
    <input
      type="tel"
      name="tel"
      id="tel"
      placeholder="Phone"
      required
      v-model="phone"
    />
    <select name="message-type" id="message-type" v-model="messageType">
      <option value="more" selected>More info</option>
      <option value="report">Report an issue</option>
      <option value="help">Ask for help</option>
    </select>
    <textarea
      name="Message-text"
      id="Message-text"
      cols="30"
      rows="10"
      placeholder="Message"
      class="mb-4"
      required
      v-model="messageText"
    ></textarea>
    <button class="fw-normal px-3 py-1 rounded" @click="getNewMessage()">
      SEND
    </button>
  </form>
</template>

<script>
import { store } from "../../../store";
export default {
  name: "FormSection",
  data() {
    return {
      store,
      name: "",
      email: "",
      phone: "",
      messageType: "more",
      messageText: "",
    };
  },
  methods: {
    getNewMessage() {
      const newMex = {
        authorName: this.name,
        authorEmail: this.email,
        authorPhone: this.phone,
        mesageType: this.messageType,
        messageText: this.messageText,
      };
      if (this.messageType === "more") {
        this.store.messages.more.push(newMex);
      } else if (this.messageType === "report") {
        this.store.messages.report.push(newMex);
      } else if (this.messageType === "help") {
        this.store.messages.help.push(newMex);
      }
      this.name = "";
      this.email = "";
      this.phone = "";
      this.messageType = "more";
      this.messageText = "";
      console.log(this.store.messages);
    },
  },
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
