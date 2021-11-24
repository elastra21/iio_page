<template>
  <div class="about-us">
    <v-container style="padding-top:0px" fluid>
      <v-row align="center" justify="center" class="tier-2 header">
        <div class="d-flex white-filter" />
        <v-col class=" d-flex text-center flex-column ">
          <h2 class="uppercase white--text pl-2">{{ $t("sobreNosotros.title") }}</h2>
        </v-col>
        <v-col class=" d-flex  flex-column ">
          <p class="body header-description white--text">
            {{ $t("sobreNosotros.content") }}
          </p>
        </v-col>
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
            />
          </svg>
        </div>
      </v-row>

      <v-container style="margin-top:100px">
        <v-row justify="center">
          <v-col md="4" xl="4" lg="4" cols="12">
            <h5>{{ $t("mensaje_bienvenida.title") }}</h5>
            <p class="body mt-3 mb-8" v-html="$t('mensaje_bienvenida.content')" />
          </v-col>

          <v-col md="6" xl="6" lg="6" cols="12" class="d-flex justify-center pt-8">
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

          <v-col data-aos="fade-right" md="7" xl="6" lg="6" cols="12" class="justify-center d-flex">
            <v-card class="py-5 pr-5" flat hover>
              <h5>{{ $t("mision.title") }}</h5>
              <p class="body">
                {{ $t("mision.content") }}
              </p>
            </v-card>
          </v-col>
          <v-col data-aos="fade-left" md="5" xl="4" lg="4" cols="12" class="justify-center d-flex ">
            <v-card class="pa-5" flat hover>
              <h5>{{ $t("vision.title") }}</h5>
              <p class=" body">
                {{ $t("vision.content") }}
              </p>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="margin-top:105px">
          <v-col cols="12" xl="6" lg="6" class="pa-0" data-aos="fade-right">
            <v-img
              style="align-self:center"
              height="100%"
              :src="require('../assets/images/uabc_landscape.png')"
            />
          </v-col>
          <v-col cols="12" xl="6" lg="6" class="book-page pa-10" data-aos="fade-left">
            <h5 class="pt-5">{{ $t("historia.title") }}</h5>
            <p class="body pt-2" v-html="$t('historia.content')" />
          </v-col>
        </v-row>

        <v-row style="margin-top:105px">
          <v-col cols="12" lg="2" xl="2" style="max-width:183px">
            <h3 data-aos="fade-right">{{ $t("personal.title") }}</h3>
          </v-col>
          <v-col xl="9" lg="9" cols="12">
            <v-layout row wrap>
              <v-flex
                class="align-center d-flex xs12 sm6 md6 lg6 xl6"
                v-for="(worker, index) in personal"
                :key="index"
              >
                <WorkerCell data-aos="fade-up" :worker="worker" v-if="validateWorkers(index)" />
              </v-flex>
            </v-layout>
            <div class="personal-bottom" data-aos="fade-up">
              <router-link class="ver-mas" to="/personal">
                {{ $t("personal.subtitle") }}<v-icon v-html="'mdi-chevron-right'" />
              </router-link>
            </div>
          </v-col>
        </v-row>

        <v-row class="location">
          <v-col
            data-aos="fade-right"
            class="pa-7 header col-sm-6 col-md-4 col-lg-4 col-xl-4 col-12 "
          >
            <v-row>
              <v-col class="d-flex flex-column align-start">
                <h6 class="white--text">{{ $t("ubicacion.direccion") }}:</h6>
                <p class="body white--text address">
                  Carretera Ensenada-Tijuana No. 3917, Fracc. Playitas, Ensenada, Baja California,
                  C.P. 22860
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-1 d-flex flex-column align-start">
                <h6 class="white--text">{{ $t("ubicacion.telefono") }}:</h6>
                <p class="body white--text">
                  <a href="tel:6461528222">
                    (646)152-82-22
                  </a>
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-1 d-flex flex-column align-start">
                <h6 class="white--text">{{ $t("ubicacion.redesSociales") }}:</h6>
                <div class="d-flex mt-4">
                  <v-btn icon color="white" @click="goToLink(facebook)">
                    <v-icon size="26" v-text="'mdi-facebook'" />
                  </v-btn>
                  <v-btn icon class="ml-3 white--text" @click="goToLink(instagram)">
                    <v-icon size="26" v-text="'mdi-instagram'" />
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="map pa-0" data-aos="fade-left col-sm-6 col-md-8 col-lg-8 col-xl-8 col-12 ">
            <iframe
              aria-hidden="true"
              style=" width: 100%; height: 100%;  top: 0px; left: 0px; bottom:0px; border: 0;"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.6099796486155!2d-116.6684856846281!3d31.86282683733922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d89307e80ce069%3A0xc0c2f086acef21e2!2sInstituto%20de%20Investigaciones%20Oceanol%C3%B3gicas!5e0!3m2!1ses!2smx!4v1632215482998!5m2!1ses!2smx"
              height="500"
              loading="lazy"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <ScrollToTop />
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  components: {
    ScrollToTop: () => import(/* webpackPrefetch: true */ "../components/Form/scrollToTop.vue"),
    WorkerCell: () => import(/* webpackPrefetch: true */ "../components/Lists/WorkerCell.vue")
  },
  computed: {
    personal: function() {
      return this.$info.about.personal.slice(0, 6);
    },
    facebook: function() {
      return this.$info.about.information.facebook;
    },
    instagram: function() {
      return this.$info.about.information.instagram;
    }
  },
  methods: {
    goToLink(link) {
      window.location = link;
    },
    validateWorkers: function(index) {
      if (this.$vuetify.breakpoint["smAndUp"]) {
        return true;
      } else return index < 3;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global";
.about-us {
  position: relative;

  width: 100%;
  height: 100%;
}
.header-description {
  max-width: 284px;
  height: 91px;
}
.book-page {
  display: flex;
  flex-direction: column;
  background-color: $yellow;
}

.location {
  margin-top: 87px;
  height: 377px;
}

.personal-bottom {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 53px;
  border-top: 1px #bbb solid;
  padding-top: 24px;
  padding-right: 22px;
  .ver-mas {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    color: #383838;
    i {
      padding-left: 15px;
    }
  }
}
.address {
  width: 260px;
  height: 88px;
}
@media (max-width: $screen-sm-min) {
  .location {
    height: auto !important;
    .map {
      height: 360px;
    }
  }
}
</style>
