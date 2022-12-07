<template>
  <div
    class="toast-container position-fixed bottom-0 end-0 p-3"
    v-for="message in store.messagesSent.more"
    v-show="message.visible"
  >
    <div id="liveToast" class="toast show">
      <div class="toast-header">
        <i class="fa-solid fa-circle-dot me-2"></i>
        <strong class="me-auto">New Message</strong>
        <small>{{ message.hour }}</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="message.visible = false"
        ></button>
      </div>
      <div class="toast-body">{{ message.text }}</div>
    </div>
  </div>
  <div
    class="toast-container position-fixed bottom-0 end-0 p-3"
    v-for="message in store.messagesSent.report"
    v-show="message.visible"
  >
    <div id="liveToast" class="toast show">
      <div class="toast-header">
        <i class="fa-solid fa-circle-dot me-2"></i>
        <strong class="me-auto">New Message</strong>
        <small>{{ message.hour }}</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="message.visible = false"
        ></button>
      </div>
      <div class="toast-body">{{ message.text }}</div>
    </div>
  </div>
  <div
    class="toast-container position-fixed bottom-0 end-0 p-3"
    v-for="message in store.messagesSent.help"
    v-show="message.visible"
  >
    <div id="liveToast" class="toast show">
      <div class="toast-header">
        <i class="fa-solid fa-circle-dot me-2"></i>
        <strong class="me-auto">New Message</strong>
        <small>{{ message.hour }}</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="message.visible = false"
        ></button>
      </div>
      <div class="toast-body">{{ message.text }}</div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "MessageAnswer",
  data() {
    return {
      store,
    };
  },
  methods: {
    closeMessage(i) {},
  },
};
</script>

<style lang="scss" scoped>
i {
  color: lightgreen;
}
</style>
