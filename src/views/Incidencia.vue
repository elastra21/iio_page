<template>
  <v-container class="pt-0" fluid>
    <v-row align="center" justify="center" class="tier-2 header">
      <div class="d-flex white-filter" />
      <v-col class=" d-flex text-center flex-column ">
        <h2 class="uppercase white--text pl-2" v-html="$t('incidencia')" />
      </v-col>
      <v-col class=" d-flex  flex-column ">
        <p class="body header-description white--text">
          El IIO promueve y desarrolla proyectos de vinculación con diversas instancias que
          presenten áreas de oportunidad, gestiona, promueve y ofrece servicios analíticos y de
          asesoría especializada a la sociedad.
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
          ></path>
        </svg>
      </div>
    </v-row>
    <v-container fluid class=" mt-15" style="position:relative">
      <v-row justify="center" style=" margin-top:50px; position:relative" no-gutters>
        <v-col
          data-aos="fade-right"
          class="col-md-4 col-lg-3 col-xl-3 col-3"
          style="width: 300px !important; position:relative"
        >
          <div v-if="!isTablet" class="aside">
            <div class="wrapper-shit">
              <h5 class="pb-4 dark-gray">Categorías</h5>
              <v-divider style="backgroundColor:black; border-bottom-width:2px !important" />
              <div class="options  ">
                <a
                  v-for="item in vinculacion"
                  :key="vinculacion.name"
                  :href="item.link"
                  class="body option-item dark-gray"
                  v-text="`- ${item.name}`"
                />
              </div>
            </div></div
        ></v-col>
        <v-col cols="12" md="7" lg="7" xl="7" class="px-0 d-flex flex-column">
          <h5 class="pb-4 dark-gray">{{ $t("vinculacion.title") }}</h5>
          <v-divider
            style="backgroundColor:black; border-bottom-width:2px !important; width:100%"
          />
          <v-row class="pa-0 pt-10">
            <v-col data-aos="zoom-in" class="" cols="12" xl="4" lg="4" md="4" sm="6">
              <h5>{{ $t("vinculacion.message") }}</h5>
              <!-- <span class="body pt-1" style="max-width:220px">
                Algunos proyectos y servicios que el instituto ha desarrollado:
              </span> -->
            </v-col>

            <v-col
              class=" pt-0 gallery-cell col-sm-6 col-md-8 col-lg-8 col-xl-8 col-12"
              :data-aos-delay="Math.floor(Math.random() * 100)"
              data-aos="zoom-in"
            >
              <v-img :src="alumnos" aspect-ratio="1" class="gallery-item" height="250" />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="item in vinculacion"
              :key="item.name"
              :data-aos-delay="Math.floor(Math.random() * 100)"
              class="gallery-cell col-sm-6 col-md-4 col-lg-6 col-xl-6 col-12"
              data-aos="zoom-in"
              @click="setItem(item)"
            >
              <v-img
                aspect-ratio="1"
                height="250"
                class="gallery-item"
                :src="getImage(item.image)"
              />
              <h6 class="mt-10 pr-7" v-html="item.subtitle" />
            </v-col>
          </v-row>
          <div class="personal-bottom" data-aos="fade-up">
            <!-- <router-link class="ver-mas" to="/personal">
              ver todo el personal<v-icon v-html="'mdi-chevron-right'" />
            </router-link> -->
          </div>
        </v-col>
      </v-row>
      <OverlayVin :content="selected" :show="modal" :onClose="closeModal" />
    </v-container>
  </v-container>
</template>
<script>
import $ from "jquery";
import { OverlayVin } from "../components/Form";

export default {
  name: "investigacion",
  components: { OverlayVin },
  data: () => ({
    isTablet: window.innerWidth < 960,
    publicPath: $(location).attr("origin") + "/archivos/vinculacion/",
    modal: false,
    selected: null
  }),
  computed: {
    alumnos: () => require("../assets/images/alumnos.jpeg"),
    vinculacion() {
      return this.$info.vinculacion;
    }
  },
  methods: {
    closeModal() {
      this.selected = null;
      this.modal = false;
    },
    setItem(item) {
      this.selected = item;
      this.modal = true;
    },
    getImage(url) {
      console.warn(this.publicPath + url);
      return this.publicPath + url;
    },
    onresize: function() {
      this.isTablet = window.innerWidth < 960;
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.onresize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onresize);
  }
};
</script>
<style lang="scss" scoped>
.header-description {
  max-width: 284px;
  height: 91px;
}
.read-more {
  width: 171px;
  height: 39px;
  * {
    color: white !important;
  }
}
.incidencia {
  display: flex;
  position: relative;
  // padding-top: 200px;
}

.aside {
  // margin-top: 50px;
  position: -webkit-sticky;
  position: sticky;

  top: 50px; /* required */
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  width: 300px !important;
  .wrapper-shit {
    position: relative;
  }
  // height: 100%;
  //background-color: red;
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
.options {
  display: flex;
  flex-direction: column;
  position: relative;
  .option-item {
    width: 185px;
    margin: 0 !important;
    padding-top: 18px;
  }
}

.gallery-cell {
  overflow: hidden;
  cursor: pointer !important;
}
.gallery-item {
  transition: all 0.3s ease-out;
}
.gallery-item::after {
  position: absolute;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  opacity: 0;
  content: "";
}

.gallery-item:hover {
  transform: scale(1.1);
  &::after {
    opacity: 1;
  }
}
</style>

<!-- https://s3-alpha-sig.figma.com/img/a433/df93/7030806b116ce56622c24960f553e2d6?Expires=1634515200&Signature=D87Vlh~ToEamMWN7-bBPs80DWzP3pFNJXBCiEZSe0RkNvEb4RCXXS6sn~aGyvHEooLrflIvMuA2tV0Rs--MTqWsVUotPlrvalWGDPQ4bArU3JANC8KmYBW0INAQZb7YC~yh0psrSpeNh~76j6gwXh3rDJtCVEvM6S2dBzSsXXlpKYQM1AULAzYpbbwiobIP5pWp2Aq8GxU49eygorp1KldOp-4eGsV~EbxY96ZtiZXnqPfLDVQm02DfgWWzRKaw4oGcOM6UNjZPtawhnyMclnqsclzVW2Bp60EvZ-eqkBe0Xto~Pa8d7a0mRTAOu2dxj1HMKXRlrzUpcRNhYB4-qQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" -->
<!-- https://s3-alpha-sig.figma.com/img/b324/4253/36dba16a022e9d1996541bbd277282b8?Expires=1634515200&Signature=UmT9IcE8ueBy1BkUf0ekYLWnZJDRx-eaUJldKsAGZGDS2PydMx6lJXw6n5lfKM3csi1fWCkWruxMR1AxbeNybQaHMi7O8svHHhNJoYW0QLBlhB6xxajnPBHTipMzk9lYBp5QqG1UoRAVV-x0WtnuFlYDEGF1u1hoUuy4jMQcduNaJ31hXdjPIO8GeDQcwFU05T1AcztWs9N4dNx8oydItsq5R4T68kswTD8TjG9G2OuSIRwOQ0LWijJbbTLYfiNicfchASO6LatrjVTQkZyZwjFqqt5BFVgt5-2Eo9QExZbUHwxKhSWFIsYiK40Mqv~tfPcb4Jl~ZTgGmcU1SWb~yQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" -->
<!-- https://s3-alpha-sig.figma.com/img/4206/8d92/bf3df183b31c51594ba179bbf39686e4?Expires=1634515200&Signature=RGZTJkjY-~xIiUnf-SK4gQVRw87n9t4-m7ECOtnHfWP-j-X9sXzt2vmU4Btmg6P1pkEtmrgxdrrU0d07jP6VssXJyUGu1z6V-etvKi~k5p2xYs0fV--7Y7M7~lLBjWvEjaSWIVntmBW-prOCLkejNL7T3J-UJXlezkXnJ3QnP~g7q8TZhjUqoz9pqc~i4QOi865mqhIoRQhqpOWggGycEEeoj7cgGCWuS6VBrj~2fxTjr5w0v1635uIOAJIXb0uKsYTCAiu2mVvnwlDVGNBeinezxwUhQ8fhLo7kiYv-xYaLk7QciYQuzEwF-RakruNvW3IDV1F16laM~028YA0zmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" -->
<!-- https://s3-alpha-sig.figma.com/img/c530/792a/c87e1ae670e5755bdf63a6a1501ff720?Expires=1634515200&Signature=dVxY~rOJiZe5UBEXVgtfkUwKPRrKhM0yRjcviErYIimm4gKRzC7xlWMhVwIOPOSwLfuj3~T6ytWUs1aUn9ppQfAx7A3bMx8c2D64TOU8Edm58uYnpr9XtqIsGlnhn3bzUfqI-JB4Fvf98Z4Bq5ijc32l8AsFBdlGlX6MuN-S1Is6sEonQNXJE4FOFR2cdofnhHy2aIBNF~Nu-gwTiZMo6cGBD81Lv6minLsNhGYEhfBYGRl08pxxGCEOBkWQ3Ueh6nl69EG7seUb5PLLahmwEkEo4FubkIKjEosZx3NOWqOxO~6L7PviOHx3vD2rVJzvUQWuFWZncaA4RdRJqLP1qA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" -->
<!-- https://s3-alpha-sig.figma.com/img/70fd/3948/368950196f8105fab8bad1fd324a1168?Expires=1634515200&Signature=OCtH3c9r0u95Bq7zlcxQKjaVhp6h2hJc7cVq0X1Tc4gjbxKDHGr3zmJxUbrCgJft1NAQm-39rsTCwa6mxMSwBzr4KZwVGDVK0U5wyOU769Y2foRXXB68N8ZWJIOxnp2IsG98ml0ExRnXrQ6bf7i7gzQg12m4izYYP52FxDinkXDfnAQMJ9H1FEjz3jtVAqqmB4mabd6PEPuyncxVuukHO0f0699RkjQCAdh01Ai-~8o715OiqfXB1xDmoUYQ5fxl~QC29D8de9biCaUuGxkierhV2xiBY4XtoZvFECuvxQ3qSBbSn7tR0hiDKY7~0gnTfbz27Nt8R6ComeQ4xT5xIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" -->
<!-- https://s3-alpha-sig.figma.com/img/f2c7/7199/708b4efe1c288199b782d669fa0ac09a?Expires=1634515200&Signature=B-jZKyXYm8vD409yaJ3UnxgKXcENCPyl5qyplBpzVJIKoGEeukDQ6XrBj-cDMTY9-eJ36dGBewYdMZ0t2kzFNjWK5cwbw-ucEnPjNtNuNi3sq2Jc1~xK9eOA2x7mRT1ey0s8L-8NpbiZ344XwWyBKr~-LtWnPBQSsHs8MLyhcWSovt2j2SNo8nydeRGqj6tR6n0riiYdFmiTqEgCnfWs3ZAlZRxGtSFqK7Gw4MJKRLkolEKzw9z15xgaLF7UTthiHKbZKhefM1GlvAKv4rGk7RwkJ50yOhQpEfwRemtjHL08HwiiwEFJV3LBL7JCM8AT9buyqU-gI6ilgWj5~hUQSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" -->
<!-- https://s3-alpha-sig.figma.com/img/adf2/c936/2f187ccd2f1fc565092e31823f235b42?Expires=1634515200&Signature=MXabRVilxODrwb9FouQr0NKHtsqqh0YjCZK28xvcRxzsjaZIiZWD9alL90AlsVgcnmd9e06I5NYPt~p9zyXsA4JvoRNDjGVKAwqTeXgJHvygzDLmlB3HKB3JBjcKrny2G~hVlkIMq-JJE~ycBatmd9jJxkPOzoY8Xuh4IHfD-dQkP5DuqSeeKD2ZBYyURdkF-RyGl4F5-OvsGYQrMdiaASu23ga7DF6CLixkmyKdw3qEcgSI3EZUuvrjzC9JUAAXRgcyfIy1lKrsw4jPky6alOMUGaFGFNcD2JNks07g2ehjWNgP2USGor0Uw3~EI7R0U-qt1Obainy5jObm5S1MLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" -->
