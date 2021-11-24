<template>
  <v-container class="not-found-wrapper">
    <lottie-animation
      class="ma-0 wave-animation"
      height="300%"
      path="../404.json"
      :loop="true"
      :autoPlay="true"
      :speed="0.3"
    />
    <h1>Error 404</h1>
  </v-container>
</template>
<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  name: "404",
  components: {
    LottieAnimation
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global";
.not-found-wrapper {
  min-height: 900px;
  display: flex;
  top: -40px !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-top: -90px;
  text-decoration: underline;
  color: $dark-blue !important;
}
</style>
