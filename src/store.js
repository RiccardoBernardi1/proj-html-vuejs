import { reactive } from "vue";

export const store = reactive({
  info: [
    {
      icon: `<i class="fa-solid fa-clock"></i>`,
      text: "Open Hours: Mon - Sat - 9:00 - 18:00",
    },
    {
      icon: `<i class="fa-solid fa-phone"></i>`,
      text: "+1(305) 1234-5678",
    },
    {
      icon: `<i class="fa-solid fa-envelope"></i>`,
      text: "hello@example.com",
    },
  ],
  messagesReceived: {
    more: [],
    report: [],
    help: [],
  },
  messagesSent: {
    more: [],
    report: [],
    help: [],
  },
});
