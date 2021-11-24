<template>
  <v-container fluid class="container pa-0 ">
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
      height="857"
      class="carousel-item header tear-1"
      v-model="model"
    >
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          />
        </svg>
      </div>

      <v-carousel-item v-for="(slide, i) in slides" :key="slide.color">
        <v-row
          class="fill-height ma-0 align-sm-center align-md-center align-lg-center align-xl-center justify-sm-center justify-md-center justify-lg-center justify-xl-center align-start justify-start"
          style="width:100%; position:relative "
        >
          <v-col
            class="card-wrapper col-sm-9 col-md-6 col-lg-6 col-xl-6 order-md-first order-lg-first order-xl-first col-12 order-last"
          >
            <div class="slider-card pa-5 leftInfoSlider">
              <h1 class="white--text mobile-h3 carousel-title">
                {{ slide.title }}
              </h1>

              <p class="body slider-description ">{{ slide.description }}</p>
              <button class="cta read-more yellow-fill">{{ $t("leerMas") }}</button>
            </div>
          </v-col>
          <v-col cols="8" sm="9" md="6" lg="6" xl="6" class="image-container">
            <v-img
              cover
              class="slider-image mr-5"
              :aspect-ratio="1 / 1"
              :src="slider_image(slide.image)"
              max-height="590px"
              max-width="590px"
            />
          </v-col>
        </v-row>
      </v-carousel-item>
      <div class="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </v-carousel>

    <v-container fluid class="px-5" style="height:auto !important; ">
      <!-- <v-row class="justify-center noticias mt-10">
        <v-col cols="10">

        </v-col>

        <v-col
          cols="10"
          xs="12"
          sm="12"
          style="margin-bottom:40px; max-width:1200px "
          class="px-15"
        >
          <v-row
            justify="center"
            justify-sm="center"
            justify-md="center"
            justify-xl="center"
            justify-lg="center"
            class="mt-8"
          >
            <v-col class="d-flex justify-center">
              <iframe
                width="560"
                height="315"
                src="http://www.youtube.com/embed/Lp3NnmTqCBE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-col>
          </v-row>
        </v-col>
      </v-row> -->

      <v-row class="justify-center noticias mt-10">
        <v-col cols="10">
          <h3 data-aos="fade-right">{{ $t("investigacion.title") }}</h3>
        </v-col>

        <v-col
          cols="10"
          xs="12"
          sm="12"
          style="margin-bottom:100px; max-width:1200px "
          class="px-15"
        >
          <v-row
            justify="center"
            justify-sm="center"
            justify-md="center"
            justify-xl="center"
            justify-lg="center"
            class="mt-8"
          >
            <v-col
              class="mt-3 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-12"
              v-for="item in investigaciones"
              :key="item.name"
              style="max-width:300px !important"
            >
              <InvestigacionCell :investigacion="item" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="justify-center noticias">
        <v-col
          cols="12"
          style="margin-bottom:150px"
          :class="imageShouldShow('mdAndUp') ? 'px-15' : null"
        >
          <v-row
            class="mt-8 justify-sm-start justify-md-start justify-lg-center justify-xl-center justify-start"
          >
            <v-col cols="12" md="2" lg="2" xl="2" style="max-width:183px">
              <h3 data-aos="fade-right">{{ $t("noticias") }}</h3>
            </v-col>
            <v-col cols="12" md="9" lg="9" xl="9">
              <el-tabs data-aos="fade-left" :value="years[0].name + '0'">
                <el-tab-pane
                  v-for="(year, index) in years"
                  :key="index"
                  :label="year.name + ''"
                  :name="year.name + '' + index"
                >
                  <el-tabs :value="months[0].name">
                    <el-tab-pane
                      v-for="month in months"
                      :key="month.value + year.name"
                      :label="$t(`meses.${month.name}`)"
                      :name="month.name"
                      :style="
                        'opacity:' + getNewsFromDate(parseInt(month.value) + 1, year.name).length >
                        0
                          ? '1'
                          : '.3 !impotant'
                      "
                      :disabled="!getNewsFromDate(parseInt(month.value) + 1, year.name).length > 0"
                    >
                      <v-expansion-panels
                        accordion
                        flat
                        :value="0"
                        class="mt-15"
                        style="border-top:2px black solid; border-radius:0px"
                      >
                        <v-expansion-panel
                          v-for="(noticia, i) in getNewsFromDate(
                            parseInt(month.value) + 1,
                            year.name
                          )"
                          :key="i"
                        >
                          <v-expansion-panel-header>
                            <h3>{{ noticia.title }}</h3>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-row>
                              <v-col class="body mid-grey" cols="12" md="8" lg="8" xl="8">
                                {{ noticia.content }} <br />
                                <a href="#" class="links underline ">{{ $t("leerMas") }}</a>
                              </v-col>
                              <v-col cols="12" md="4" lg="4" xl="4">
                                <span class="body-2 grey-2">{{ noticia.date }}</span>
                                <p class="tag grey-2">{{ noticia.tag }}</p>
                              </v-col>
                            </v-row>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </el-tab-pane>
                  </el-tabs>
                </el-tab-pane>
              </el-tabs>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="revista-oceanologia" justify="center">
        <v-col
          class="col-md-6 col-lg-6 col-xl-6 col-10 d-flex flex-column align-start"
          data-aos="fade-right"
        >
          <div class="magazine-card">
            <div class="covers-wrapper">
              <v-img src="../assets/images/cover-1.jpeg" class="grey lighten-2 covers cover-1">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-img src="../assets/images/cover-2.jpeg" class="grey lighten-2 covers cover-2">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-img src="../assets/images/cover-3.jpeg" class="grey lighten-2 covers cover-3">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
            <h2 class="magazine-title mt-3 h2-alt">{{ $t(`revista.title`) }}</h2>
            <p class="body">{{ $t(`revista.content`) }}</p>
            <button class=" cta read-more " @click="openMagazine()">
              {{ $t("leerMas") }}
            </button>
          </div>
        </v-col>
        <v-col
          data-aos="fade-left"
          class="col-md-6 col-lg-6 col-xl-6 col-10 d-flex flex-column d-flex flex-column align-start"
        >
          <div class="podcast-wrapper">
            <v-img :src="podcast" class="podcast-image">
              <v-img
                :src="radarLogo"
                style="position:absolute; bottom:0px; right:19px; width:197px; "
              />
            </v-img>
            <h2 class="magazine-title mt-3 h2-alt" style="max-width:362px; height:80px !important">
              Radar Oceanografico
            </h2>
            <p class="body" style="max-width:697px">{{ $t(`radarOceanografico`) }}</p>
            <button class=" cta read-more white--text" @click="openPodcast()">
              {{ $t("leerMas") }}
            </button>
          </div>
        </v-col>
      </v-row>

      <v-row class="galeria" align="center" v-if="images_urls">
        <v-col cols="12" xl="3" lg="3" md="3" sm="6">
          <h2 class="h2-alt">{{ $t("galeria.title") }}</h2>
          <p class="body" style="max-width:220px">{{ $t("galeria.content") }}</p>
        </v-col>

        <v-col
          cols="12"
          xl="3"
          lg="3"
          md="3"
          sm="6"
          class="pa-0 gallery-cell"
          :data-aos-delay="Math.floor(Math.random() * 100)"
          data-aos="zoom-in"
          v-on:click="imageIndex = 0"
        >
          <v-img class="galery-item" :src="gallery[0]" height="250" />
        </v-col>
        <v-col
          v-if="imageShouldShow('mdAndUp')"
          class="pa-0 gallery-cell"
          :data-aos-delay="Math.floor(Math.random() * 100)"
          data-aos="zoom-in"
          cols="6"
          v-on:click="imageIndex = 1"
        >
          <v-img class="galery-item" :src="gallery[1]" height="250" />
        </v-col>
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="6"
          class="pa-0 gallery-cell"
          :data-aos-delay="Math.floor(Math.random() * 100)"
          data-aos="fade-right"
          v-on:click="imageIndex = 2"
        >
          <v-img class="galery-item" :src="gallery[2]" height="250" />
        </v-col>
        <v-col
          v-if="imageShouldShow('smAndUp')"
          class="pa-0 gallery-cell"
          :data-aos-delay="Math.floor(Math.random() * 100)"
          data-aos="fade-left"
          cols="6"
          v-on:click="imageIndex = 3"
        >
          <v-img class="galery-item" :src="gallery[3]" height="250" />
        </v-col>
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="6"
          class="pa-0 gallery-cell"
          :data-aos-delay="Math.floor(Math.random() * 100)"
          data-aos="fade-right"
          v-on:click="imageIndex = 4"
        >
          <v-img height="250" class="galery-item" :src="gallery[4]" />
        </v-col>
        <v-col
          v-if="imageShouldShow('mdAndUp')"
          class="pa-0 gallery-cell"
          :data-aos-delay="Math.floor(Math.random() * 100)"
          data-aos="fade-up"
          cols="4"
          v-on:click="imageIndex = 5"
        >
          <v-img height="250" class="galery-item" :src="gallery[5]" />
        </v-col>
        <v-col
          cols="4"
          lg="4"
          md="4"
          sm="6"
          v-if="imageShouldShow('smAndUp')"
          class="pa-0 gallery-cell"
          :data-aos-delay="Math.floor(Math.random() * 100)"
          data-aos="fade-left"
          v-on:click="imageIndex = 6"
        >
          <v-img height="250" class="galery-item" :src="gallery[6]" />
        </v-col>
      </v-row>

      <ScrollToTop />
      <ChangeLang />
      <LightGallery
        :images="gallery"
        :index="imageIndex"
        :disable-scroll="true"
        @close="imageIndex = null"
      />
    </v-container>
  </v-container>
</template>

<script>
import $ from "jquery";
import { LightGallery } from "vue-light-gallery";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
export default {
  name: "Home",
  components: {
    InvestigacionCell: () =>
      import(/* webpackPrefetch: true */ "../components/Lists/InvestigacionCell.vue"),
    ScrollToTop: () => import(/* webpackPrefetch: true */ "../components/Form/scrollToTop.vue"),
    ChangeLang: () => import(/* webpackPrefetch: true */ "../components/Form/changeLang.vue"),
    LottieAnimation,
    LightGallery
  },
  computed: {
    podcast: () => require("../assets/images/podcast.png"),
    radarLogo: () => require("../assets/images/radar-logo.png"),
    gallery() {
      if (this.images_urls) {
        return this.images_urls.map(image => {
          image = this.publicPath + image;
          return image;
        });
      }
    },
    investigaciones() {
      return this.$info.investigaciones;
    },
    getNewsYears() {
      const { noticias } = this.$info.home;
      const year_list = [
        ...new Set(noticias.map(news => news.date.substring(news.date.length - 4)))
      ];
      this.years = year_list.map(year => ({ name: year }));
    }
  },
  methods: {
    openPodcast() {
      window.open("http://radio.uabc.mx/radar-oceanografico");
    },
    openMagazine() {
      window.open("https://cienciasmarinas.com.mx/index.php/cmarinas");
    },
    slider_image(link) {
      return $(location).attr("origin") + "/archivos/slider/" + link;
    },
    imageShouldShow(height) {
      return this.$vuetify.breakpoint[height];
    },
    getNewsFromDate(month, year) {
      const { noticias } = this.$info.home;
      const news_from_date = [];

      noticias.forEach((noticia, i) => {
        if (noticia.date.includes(`/${month}/${year}`)) news_from_date.push(noticia);
      });
      return news_from_date;
    }
  },
  mounted: function() {},
  beforeMount: function() {
    $.getJSON($(location).attr("origin") + "/archivos/galeria", data => {
      this.images_urls = data;
      this.publicPath = $(location).attr("origin") + "/archivos/galeria/";
      this.slides = this.$info.home.slider.map(slide => slide);
      this.getNewsYears;
    });
  },
  data: () => ({
    model: 0,
    slides: null,
    activeName: "",
    panels: [],
    years: [{ name: "2020" }, { name: "2021" }],
    months: [
      { name: "Enero", value: "0" },
      { name: "Febrero", value: "1" },
      { name: "Marzo", value: "2" },
      { name: "Abril", value: "3" },
      { name: "Mayo", value: "4" },
      { name: "Junio", value: "5" },
      { name: "Julio", value: "6" },
      { name: "Agosto", value: "7" },
      { name: "Septiembre", value: "8" },
      { name: "Octubre", value: "9" },
      { name: "Noviembre", value: "10" },
      { name: "Diciembre", value: "11" }
    ],
    images_urls: null,
    publicPath: null,
    imageIndex: null
  })
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/global";
.container {
  height: 100%;
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0px;
  left: -1px;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(150% + 1.3px);
  height: 278px;
  stroke: #646464;
  stroke-width: 1px;
  stroke-linejoin: round;
}

.wave .shape-fill {
  fill: transparent;
}

.carousel-item {
  position: relative;
}
.card-wrapper {
  display: flex;
  justify-content: flex-end;
}
.slider-card {
  max-width: 480px;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
}
.image-container {
  display: flex;
}

.slider-image {
  border-radius: 50%;
  float: left;
  z-index: 1;
}
.carousel-title {
  text-overflow: ellipsis;
  overflow: hidden;
  // Addition lines for 2 line or multiline ellipsis
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.slider-description {
  margin-top: 20px;
  color: white;
  max-width: 400px;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  // Addition lines for 2 line or multiline ellipsis
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.leftInfoSlider {
  position: relative;
  padding-right: 30px;
}
// .floating {
//   animation-name: floating;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out;
//   // margin-left: 30px;
//   // margin-top: 5px;
// }
//
// @keyframes floating {
//   0% {
//     transform: translate(0, 0px);
//   }
//   50% {
//     transform: translate(0, 15px);
//   }
//   100% {
//     transform: translate(0, -0px);
//   }
// }

.magazine-card {
  margin: 0 auto;
  max-width: 490px;
}
.magazine {
  margin-top: 70px;
  line-height: 150%;
  border-bottom: 1px;
  width: 430px;
  float: right;
  text-align: right;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}

.magazine-title {
  display: flex;
  align-items: center;
  max-width: 287px;
  height: 137px;
}

.covers-wrapper {
  position: relative;
  max-width: 490px;
  height: 352px;
}
.covers {
  // transform: rotate(8deg);
  width: 262px;
  position: absolute;
}
.cover-1 {
  left: 0%;
}
.cover-2 {
  left: 22%;
}
.cover-2::after {
  display: block;
  position: absolute;
  background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.4802) 0%, rgba(0, 0, 0, 0) 91.43%);
  height: 100%;
  margin-left: 45px;
  width: 73px;
  content: "";
}
.cover-3 {
  left: 45%;
}
.cover-1::after {
  display: block;
  position: absolute;
  background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.4802) 0%, rgba(0, 0, 0, 0) 91.43%);
  margin-left: 45px;
  height: 100%;
  width: 73px;
  content: "";
}
.podcast-wrapper {
  max-width: 100%;
  position: relative;
  .podcast-image {
    max-height: 449px;
    max-width: 697px;
  }
}
.galeria {
  padding-top: 90px !important;
  padding: 0 10%;
  .gallery-cell {
    overflow: hidden;
  }
  .galery-item {
    transition: all 0.3s ease-out;
  }
  .galery-item::after {
    position: absolute;
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    opacity: 0;
    content: "";
  }

  .galery-item:hover {
    transform: scale(1.1);
    &::after {
      opacity: 1;
    }
  }
}

@media only screen and (max-width: $screen-lg-min) {
  .slider-card {
    margin-top: -0px !important;
    height: 400px;
  }
  .card-wrapper {
    justify-content: center;
  }
  .image-container {
    margin-top: 60px;
    height: 350px !important;
    width: 350px !important;
    max-height: 350px !important;
    max-width: 350px !important;
    * {
      height: 326px !important;
      width: 326px !important;
      max-height: 326px !important;
      max-width: 326px !important;
    }
  }
}
@media (max-width: 600px) {
  .card-wrapper {
    // align-self: flex-start;
    // justify-content: flex-start !important;
  }
}

@media (max-width: $screen-lg-min) and (min-width: 500px) {
  .slider-card {
    top: -50px !important;
  }
}

@media (max-width: 500px) {
  .slider-card {
    padding-top: 0px !important;
  }
  .carousel-title {
    margin-top: 30px;
  }
  .slider-description {
    max-width: 300px;
  }
  .card-wrapper {
    height: 100%;
    align-self: flex-start;
    justify-content: flex-start !important;
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 42px;
    }
  }
  .covers-wrapper {
    margin: 0 auto;
    position: relative;
    align-self: center;
    max-width: 287px;
    height: 204px;
    .covers {
      // transform: rotate(8deg);
      width: 152px;
      height: 204px;
      position: absolute;
    }
  }

  .podcast-image {
    margin: 0 auto;
    max-height: 185px !important;
    max-width: 286px !important;
  }
  .image-container {
    display: flex;
    margin-top: 55px !important;
    margin-left: 30px;
    padding-bottom: 0px;
    align-items: flex-end;
    justify-content: flex-start;
    height: 254px !important;
    width: 254px !important;
    max-height: 254px !important;
    max-width: 254px !important;
    * {
      height: 240px !important;
      width: 240px !important;
      max-height: 240px !important;
      max-width: 240px !important;
    }
  }
}
// 'xs': 0,
// 'sm': 340px,
// 'md': 540px,
// 'lg': 800px - 24px,
// 'xl': 1280px - 24px
</style>
