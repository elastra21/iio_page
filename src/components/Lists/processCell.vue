<template>
  <v-card
    class="mx-auto d-flex mt-8 ml-4 pr-3"
    hover
    width="450"
    max-width="450"
    :to="{ name: this.process.route }"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      max-width="240px"
      height="220px"
    />

    <div class="titles mt-2 ml-4 mb-0">
      {{ this.process.name }}
      <p class="pt-3 body-2 b-0">
        {{ this.process.subtitle }}
      </p>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "ProcessCell",
  props: {
    process: Object
  }
};
</script>

<style lang="scss">
// #process-card {
//   .v-image {
//     .v-image__image--cover {
//       transform: translateZ(0);
//       transition: all 0.3s cubic-bezier(0.34, 1.61, 0.7, 1);
//     }
//   }
// }
// #process-card:hover {
//   .v-image {
//     .v-image__image--cover {
//       transform: translate3d(0, -30px, 0);
//     }
//   }
// }
//
</style>
<style lang="scss" scoped>
.body-2 {
  opacity: 0.3;
  font-size: 14px !important;
  line-height: 19px !important;
}
</style>
