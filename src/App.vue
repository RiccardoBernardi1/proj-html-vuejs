<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import MessageAnswer from "./components/MessageAnswer.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    MessageAnswer,
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  <MessageAnswer />
</template>

<style lang="scss">
@import "./style/global.scss";
.container {
  max-width: 71.875rem;
}
section h6 {
  color: #21aaac;
  margin-bottom: 1.875rem;
}
</style>
