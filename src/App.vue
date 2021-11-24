<template>
  <v-app class="main-app ">
    <Navbar></Navbar>
    <v-main class="pa-0" style="position:relative">
      <router-view style="position:relative" />
    </v-main>

    <v-overlay color="black" z-index="2000" :value="message">
      <v-icon class="close" size="26" v-html="'mdi-close'" @click="message = false" />
      <v-img contain :src="announcement_image" :aspect-ratio="1 / 1" height="90%" width="90%" />
    </v-overlay>
    <v-banner v-if="banner" class="banner" single-line>
      <v-icon slot="icon" color="warning" size="36" v-html="this.info.banner.icon" />
      <p class="ma-0 white--text">
        <b>{{ this.info.banner.title }}:</b> {{ this.info.banner.description }}
      </p>
      <template v-slot:actions>
        <v-icon color="white" size="26" v-html="'mdi-close'" @click.stop="banner = !banner" />
      </template>
    </v-banner>
    <v-footer class="pa-0 ma-0" color="white">
      <lottie-animation
        class="ma-0 wave-animation"
        height="300%"
        path="../green-wave.json"
        :loop="true"
        :autoPlay="true"
        :speed="0.3"
      />
      <div class="pie-pagina d-flex flex-column  ">
        <div class="wave-text">
          <span>
            <b>Instituto de Investigaciones Oceanológicas </b>|
            <br v-if="!this.$vuetify.breakpoint.smAndUp" />
            Universidad Autónoma de Baja California&nbsp;
          </span>
        </div>
        <v-row
          class="justify-md-space-between justify-lg-space-between justify-xl-space-between  justify-center"
          style="margin: 60px 5vw 0;"
        >
          <v-col
            style="justify-content: space-between"
            class="d-flex flex-column"
            cols="12"
            md="6"
            lg="6"
            xl="6"
          >
            <div class="address">
              {{ this.$info.about.location.address }} <br /><br />
              Tel. (646)152-82-22
              <br /><br />
              <div class="d-flex mt-4">
                <v-btn icon color="white" @click="goToLink(facebook)">
                  <v-icon size="30" v-text="'mdi-facebook'" />
                </v-btn>
                <v-btn icon class="ml-3 white--text" @click="goToLink(instagram)">
                  <v-icon size="30" v-text="'mdi-instagram'" />
                </v-btn>
              </div>
            </div>

            <div style="width:100%" class="institution address">
              <a
                href="http://transparencia.uabc.mx/Aviso_Privacidad/index.html"
                class="institution"
              >
                <i class="el-icon-lock" /> {{ $t("privacidad") }}
              </a>
              <br />
              © &nbsp;2021 Instituto de Investigaciones Oceanológicas todos los derechos reservados.
            </div>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="10" sm="8" md="4" lg="4" xl="4">
            <v-row>
              <v-col
                class="d-flex justify-center align-center"
                cols="4"
                v-for="dependency in dependencies"
                :key="dependency.url"
              >
                <a :href="dependency.url">
                  <v-img contain max-width="110px" max-height="50px" :src="dependency.img" />
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mt-5 mb-0 pa-0 logos" align="center" justify="space-around">
          <v-col
            class="col-sm-4 col-md-2 col-lg-2 col-xl-2 col-4"
            align="center"
            v-for="logo in logos"
            :key="logo.img"
          >
            <a :href="logo.url">
              <v-img
                :transition="false"
                contain
                max-width="110px"
                max-height="50px"
                :src="logo.img"
              />
            </a>
          </v-col>
        </v-row>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import $ from "jquery";
import config from "./config";
import Navbar from "./components/Navbar";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  name: "App",
  components: { LottieAnimation, Navbar },
  data: () => ({
    banner: false,
    message: false,
    announcement: null,
    isTablet: window.innerWidth < 1280,
    dependencies: [
      { img: require("./assets/images/uabc_radio.png"), url: "http://radio.uabc.mx/" },
      {
        img: require("./assets/images/uabc_contraloria.png"),
        url: "http://transparencia.uabc.mx/ContraloriaSocial/"
      },
      { img: require("./assets/images/uabc_correo.png"), url: "http://correo.uabc.edu.mx/" },
      {
        img: require("./assets/images/uabc_biblioteca.png"),
        url: "http://www.uabc.mx/biblioteca/"
      },
      { img: require("./assets/images/uabc_imagen.png"), url: "http://imagentv.uabc.mx/" },
      { img: require("./assets/images/uabc_gaceta.png"), url: "http://gaceta.uabc.mx/" }
    ],
    logos: [
      { img: require("./assets/images/logo-copaes.png"), url: "https://www.copaes.org/" },
      { img: require("./assets/images/logo_anuies.png"), url: "http://www.anuies.mx/" },
      { img: require("./assets/images/logo-conacyt.png"), url: "https://www.conacyt.gob.mx/" },
      { img: require("./assets/images/logo-ciees.png"), url: "https://www.ciees.edu.mx/" },
      { img: require("./assets/images/logo-sep.png"), url: "https://www.gob.mx/sep" },
      { img: require("./assets/images/logo-consorcioum.png"), url: "https://www.cumex.org.mx/" }
    ]
  }),
  computed: {
    logo: () => require("./assets/logo_iio.svg"),
    uabc: () => require("./assets/logo_uabc.png"),
    info() {
      return this.$info.home;
    },
    facebook: function() {
      return this.$info.about.information.facebook;
    },
    instagram: function() {
      return this.$info.about.information.instagram;
    },
    announcement_image() {
      return $(location).attr("origin") + "/archivos/announcement/" + this.announcement.image;
    }
  },
  methods: {
    goToLink(link) {
      window.location = link;
    }
  },
  beforeMount: function() {
    var from = new Date(this.info.banner.starts);
    var to = new Date(this.info.banner.ends);
    var from_announcement = new Date(this.info.announcement.starts);
    var to_announcement = new Date(this.info.announcement.ends);
    this.announcement = this.info.announcement;
    let check = new Date();
    if (check > from && check < to) this.banner = true;
    if (check > from_announcement && check < to_announcement) this.message = true;
  },
  mounted() {
    window.onresize = () => {
      this.isTablet = window.innerWidth < 1280;
    };
  }
};
</script>

<style lang="scss">
// @import "@/assets/styles/texts";
@import "@/assets/styles/global";
.v-overlay__content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container--fluid {
  max-width: 100% !important;
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px !important;
  }
  .container--fluid {
    max-width: 100% !important;
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/styles/global";
.main-app {
  position: relative;
  overflow: hidden;
}
.close {
  z-index: 2000;
  position: absolute !important;
  top: 20px;
  right: 20px;
  color: white;
}
.logos {
  // max-height: 140px !important;
  min-height: 132.5px !important;
  border-top: 0.5px solid white;
  padding: 10px 0 !important;
  margin: 60px 5vw 0;
}
.banner {
  z-index: 20;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: rgb(3, 118, 56) !important;
}
.overlay-image {
  width: 80% !important;
  height: 80% !important;
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
  // background-color: rgb(57, 127, 181) !important;
  // height: 564px !important;
  background-color: #15381f;
}
.wave-animation {
  overflow: hidden;
  position: relative;
  left: 0;
  top: 10px;
  svg {
    width: 200vw;
  }
}
.wave-text {
  display: flex;
  align-items: center;
  min-height: 65px !important;
  margin-top: -15px;
  padding: 10px 0 10px 5%;
  background-color: $green !important;
  font-family: Raleway;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}
.logos-wrapper {
  padding-right: 10vw;
}

.address {
  // margin-top: 35px;
  max-width: 390px;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
}
.institution {
  color: #f9fbff;
  max-width: 800px;
}

@media (max-width: $screen-sm-min) {
  .wave-animation {
    top: 0;
  }
}
</style>
