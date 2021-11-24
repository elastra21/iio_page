<template id="">
  <v-tooltip left v-if="$vuetify.breakpoint.mdAndUp">
    <template v-slot:activator="{ on, attrs }">
      <v-fab-transition>
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="ma-2 button"
          small
          v-show="showUpButton"
          target="_blank"
          @click.stop="moveUp()"
          color="rgb(255,255,255)"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-fab-transition>
    </template>
    <span class="header-4-alt white--text">Regresar</span>
  </v-tooltip>
</template>
<script>
export default {
  name: "ScrollToTop",
  data() {
    return {
      showUpButton: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    moveUp() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
    handleScroll(event) {
      if (window.scrollY > 500) {
        this.showUpButton = true;
      } else this.showUpButton = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  z-index: 100;
  position: fixed;
  bottom: 55px;
  right: 25px;
  color: "darkblue";
  height: 50px !important;
  width: 40px !important;
}
</style>
