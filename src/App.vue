<template>
  <v-app class="main-app ">
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <router-link to="/">
          <v-list-item-avatar tile size="100" height="80px">
            <v-img contain :src="logo"></v-img>
          </v-list-item-avatar>
        </router-link>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-banner v-if="banner" class="banner" single-line>
      <v-icon slot="icon" color="warning" size="36" v-html="this.$info.banner.icon" />
      <b>{{ this.$info.banner.title }}:</b> {{ this.$info.banner.description }}
      <template v-slot:actions>
        <v-icon color="warning" size="26" v-html="'mdi-close'" @click.stop="banner = !banner" />
      </template>
    </v-banner>

    <v-app-bar
      fixed
      color="darkslateblue"
      dark
      flat
      :shrink-on-scroll="!true"
      :class="banner ? 'theres-banner' : null"
      :fade-img-on-scroll="!isTablet"
    >
      <!-- <template v-slot:img="{ props }">
        <v-img
          class="teodio"
          v-bind="props"
          gradient="to top right, rgba(22,22,22,.2), rgba(22,22,22,.6)"
        ></v-img>
      </template> -->

      <div class="d-flex align-center justify-center" style="height:100%">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-show="isTablet" />
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="ml-5"
            contain
            :src="logo"
            transition="scale-transition"
            width="85"
          />
        </router-link>
      </div>

      <v-spacer v-if="!isTablet"></v-spacer>

      <div class="options pr-3" v-show="!isTablet">
        <router-link
          v-for="item in items"
          :key="item.title"
          :class="getSelected(item.title)"
          class="link-container px-4"
          :to="item.url"
        >
          <span class="link">{{ item.title }}</span>
        </router-link>
      </div>
    </v-app-bar>

    <v-main class="pa-0">
      <router-view />
    </v-main>
    <v-overlay
      color="black"
      z-index="2000"
      :value="message"
      class="d-flex justify-center align-center"
    >
    </v-overlay>
    <v-footer class="pa-0 ma-0" color="white">
      <lottie-animation
        style="overflow:hidden; position: relative; left:0; top:10px "
        class="ma-0"
        height="100%"
        path="../waves.json"
        :loop="true"
        :autoPlay="true"
        :speed="0.5"
      />
      <div class="pie-pagina d-flex flex-column align-center justify-center ">
        <v-img class="shrink mr-0" contain :src="logo" transition="scale-transition" height="55" />
        <span class="Title white--text">Instituto de Investigaciones Oceanológicas</span>
        <span class="s-light-subtitles white--text light">
          © &nbsp;IIO todos los derechos reservados | Diseñado por Hacktronicks Dev team&nbsp;
        </span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import config from "./config";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
export default {
  name: "App",
  components: { LottieAnimation },
  data: () => ({
    banner: false,
    drawer: null,
    message: false,
    isTablet: window.innerWidth < 1280,
    items: [
      { title: "Inicio", icon: "mdi-view-dashboard", url: "/" },
      { title: "Nosotros", icon: "mdi-forum", url: "/nosotros" },
      { title: "Investigación", icon: "mdi-forum", url: "/investigacion" },
      { title: "Posgrados", icon: "mdi-forum", url: "/posgrados" },
      { title: "Transparencia", icon: "mdi-forum", url: "/transparencia" },
      { title: "Incidencia social", icon: "mdi-forum", url: "/incidencia-social" }
    ]
  }),
  computed: {
    logo: () => config.images.logo
  },
  methods: {
    getSelected: function(name) {
      return this.$route.name === name ? "selected" : "not-selected";
    }
  },
  beforeMount: function() {
    var from = new Date(this.$info.banner.starts);
    var to = new Date(this.$info.banner.ends);
    let check = new Date();
    if (check > from && check < to) {
      this.banner = true;
    }
  },
  mounted() {
    window.onresize = () => {
      this.isTablet = window.innerWidth < 1280;
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/texts";
</style>
<style lang="scss" scoped>
.main-app {
  position: relative;
}
.banner {
  position: fixed;
  z-index: 20;
  width: 100%;
  background-color: white !important;
}
.theres-banner {
  margin-top: 57px !important;
}
.options {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  //  max-width: 380px;
  transition: display 0.2s ease;
}
.link-container {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white !important;
  font-family: Oxygen;
  transition: border-bottom-width 0.2s ease;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgba(102, 170, 223, 0);
}
.selected {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: white;
}
.not-selected {
}
.not-selected:hover {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(102, 170, 223);
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
}
.pie-pagina {
  width: 100%;
  position: relative;
  background-color: rgb(57, 127, 181) !important;
  height: 200px !important;
}
</style>
