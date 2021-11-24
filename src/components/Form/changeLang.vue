<template id="">
  <v-tooltip right>
    <template v-slot:activator="{ on, attrs }">
      <v-fab-transition>
        <v-btn
          fab
          v-bind="attrs"
          v-on="on"
          class="ma-2 button"
          v-show="showUpButton"
          small
          @click.stop="moveUp()"
          color="rgb(255,255,255)"
        >
          <v-img width="40px" :src="require(`../../assets/images/${getLocale()}.png`)" />
        </v-btn>
      </v-fab-transition>
    </template>
    <span class="header-4-alt white--text">{{ this.getText }}</span>
  </v-tooltip>
</template>
<script>
export default {
  name: "ChangeLang",
  props: {
    //showUpButton: Boolean
  },
  data() {
    return {
      showUpButton: true
    };
  },
  computed: {
    getText() {
      return this.$i18n.locale === "en" ? "Español" : "English";
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    getLocale() {
      return this.$i18n.locale === "en" ? "es" : "en";
    },
    moveUp() {
      this.$i18n.locale = this.getLocale();
    },
    handleScroll(event) {
      if (window.scrollY < 500) {
        this.showUpButton = true;
      } else this.showUpButton = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  display: flex;
  z-index: 100;
  position: fixed;
  bottom: 45px;
  left: 25px;
}
</style>
