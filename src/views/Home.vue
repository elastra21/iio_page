<template>
  <v-container fluid class="container pa-0 ">
    <v-carousel cycle hide-delimiter-background show-arrows-on-hover height="650" v-model="model">
      <v-carousel-item v-for="(slide, i) in slides" :key="slide.color">
        <v-img cover :src="slide.background" height="100%">
          <v-row class="fill-height ma-0" align="center" :justify="i % 2 == 0 ? 'start' : 'end'">
            <v-col
              xs="3"
              sm="6"
              md="7"
              lg="4"
              xl="3"
              class="text-h4 white--text floating"
              :class="i % 2 == 0 ? 'leftInfoSlider' : 'rightInfoSlider'"
            >
              {{ slide.title }}
              <p class="text-h6 white--text">{{ slide.description }}</p>
            </v-col>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-row class="justify-center">
      <v-col cols="10" style="height:800px" class="px-15">
        <div class="header-fg-alt about-us">Nosotros</div>
      </v-col>
    </v-row>

    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="ma-2"
            fab
            v-show="showUpButton"
            target="_blank"
            large
            @click.stop="moveUp()"
            color="rgb(255,255,255)"
            style="z-index:100; position:fixed; bottom:45px; right:25px; color:'darkblue'"
          >
            <v-icon large>mdi-chevron-up</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <span class="header-4-alt white--text">Regresar</span>
    </v-tooltip>
  </v-container>
</template>

<script>
import config from "../config";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
export default {
  name: "Home",
  components: { LottieAnimation },
  beforeMount: function() {
    this.slides = this.$info.slider.map(slide => slide);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data: () => ({
    model: 0,
    slides: null,
    showUpButton: false
  }),
  methods: {
    handleScroll(event) {
      if (window.scrollY > 500) {
        this.showUpButton = true;
      } else this.showUpButton = false;
      // Any code to be executed when the window is scrolled
    },
    moveUp() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.leftInfoSlider {
  height: 300px;
  background-color: green;
  margin-left: 8%;
  padding: 20px;
}
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  // margin-left: 30px;
  // margin-top: 5px;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}

.rightInfoSlider {
  height: 300px;
  background-color: green;
  margin-right: 8%;
  padding: 20px;
}

.about-us {
  margin-top: 70px;
  line-height: 200%;
  border-bottom: 1px;
  width: 270px;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
</style>
