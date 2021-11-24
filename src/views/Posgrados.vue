<template>
  <div class="posgrados">
    <v-container fluid class=" mt-15" style="position:relative" v-if="data !== null">
      <v-row justify="center" style=" margin-top:50px; position:relative" no-gutters>
        <v-col cols="12" md="7" lg="7" xl="6" class="px-10 d-flex flex-column">
          <h5>{{ this.data.title }}</h5>
          <p class="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel facilisi hendrerit tellus
            eu netus. Sit penatibus massa vulputate id in enim at sodales faucibus. Ac quisque in
            libero nulla libero bibendum lorem aliquet cursus. Dignissim malesuada adipiscing
            habitasse auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel facilisi
            hendrerit tellus eu netus. Sit penatibus massa vulputate id in enim at sodales faucibus.
            Ac quisque in libero nulla libero bibendum lorem aliquet cursus. Dignissim malesuada
            adipiscing habitasse auctor. Mission vision and value statements are said to be very
            important to the success of a company. In fact, business consultants often start with
            the mission, vision, and values when working with new clients. They do this for a very
            simple reason. Creating (or updating) these statements can drive the organization in a
            new direction
          </p>
          <p class="title1" style="margin-top:100px">Lorem ipsum</p>
          <p class="paragraph1">
            Mission vision and value statements are said to be very important to the success of a
            company. In fact, business consultants often start with the mission, vision, and values
            when working with new clients. They do this for a very simple reason. Creating (or
            updating) these statements can drive the organization in a new direction
          </p>

          <v-img class="image__posgrados"> </v-img>
          <p class="paragraph1">
            Mission vision and value statements are said to be very important to the success of a
            company. In fact, business consultants often start with the mission, vision, and values
            when working with new clients. They do this for a very simple reason. Creating (or
            updating) these statements can drive the organization in a new direction. Mission vision
            and value statements are said to be very important to the success of a company. In fact,
            business consultants often start with the mission, vision, and values when working with
            new clients. They do this for a very simple reason. Creating (or updating) these
            statements can drive the organization in a new direction. Mission vision and value
            statements are said to be very important to the success of a company. In fact, business
            consultants often start with the mission, vision, and values when working with new
            clients. They do this for a very simple reason. Creating (or updating) these statements
            can drive the organization in a new direction.
          </p>
          <v-img class="image__posgrados"> </v-img>
        </v-col>

        <v-col cols="2" style="max-width:300px; width: 300px !important; position:relative">
          <div v-if="!isTablet" class="aside">
            <div class="wrapper-shit">
              <h6>Posgrados</h6>
              <div class="options  ">
                <router-link
                  :to="{ path: '/posgrados/doctorado-en-medio-ambiente-y-desarrollo' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Doctorado en Medio Ambiente y Desarrollo
                </router-link>
                <router-link
                  :to="{ path: '/posgrados/oceanografia-costera' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Oceanografía Costera
                </router-link>
              </div>

              <h6 style="margin-top:95px">Investigación</h6>
              <div class="options  ">
                <router-link
                  :to="{ path: '/investigacion/Acuacultura' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Acuacultura
                </router-link>
                <router-link
                  :to="{ path: '/investigacion/ecologia-marina-integrativa' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Ecología Marina Integrativa
                </router-link>
                <router-link
                  :to="{ path: '/investigacion/biogeoquimica-marina-y-cambio-global' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Biogeoquímica Marina y Cambio Global
                </router-link>
                <router-link
                  :to="{ path: '/investigacion/ciencias-ambientales-y-del-agua' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Ciencias Ambientales y del Agua
                </router-link>
                <router-link
                  :to="{ path: '/investigacion/oceanografia-fisica' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Oceanografía Física
                </router-link>
                <router-link
                  :to="{ path: '/investigacion/laboratorio-de-paleoceanografia' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Laboratorio de Paleoceanografía
                </router-link>
              </div>
              <div class="calendar">
                <v-img :src="altLogo" width="180px" class="logo-uabc" />
                <h4 class="mt-10">Calendario</h4>
                <p class="links mt-1 mb-4 center-text">
                  Fechas relacionadas con inscripciones, Etc.
                </p>
                <button class="read-more green-fill cta">
                  <a :href="calendarLink">{{ $t("posgrados.calendario") }}</a>
                </button>
              </div>
            </div>
          </div></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "posgrados",
  data() {
    return {
      images: [],
      isTablet: window.innerWidth < 960,
      data: null
    };
  },
  computed: {
    altLogo: () => require("../assets/logo_uabc_alt.png"),
    calendarLink: function() {
      return this.$info.about.information.calendarLink;
    },
    loadData() {
      this.images = [];
      this.data = this.$info.posgrados.find(
        posgrados => posgrados.name === this.$route.params.especiality
      );
      if (!this.data) {
        this.$router.push({ name: "404" });
      } else {
        // const loading = this.$loading();
        const { name } = this.data;
        $.getJSON($(location).attr("origin") + `/archivos/posgrados/${name}`, data => {
          console.warn(data);
          // if (data !== null)
          //   data.forEach((image, i) => {
          //     this.images.push(this.publicPath + `${name}/${image}`);
          //   });
          setTimeout(() => loading.close(), 1000);
        });
      }
    }
  },
  methods: {
    onresize: function() {
      this.isTablet = window.innerWidth < 960;
    }
  },
  mounted: function() {
    this.loadData;
    window.addEventListener("resize", this.onresize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onresize);
  },
  watch: {
    "$route.params.especiality": {
      handler: function(search) {
        this.loadData;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
h4 {
  text-align: left !important;
}
h5 {
  margin: 30px 0 15px 0;
}
.read-more {
  width: 171px;
  height: 39px;
  * {
    color: white !important;
  }
}
.posgrados {
  display: flex;
  position: relative;
  // padding-top: 200px;

  .image__posgrados {
    width: 623px;
    height: 245px;
    background-color: #c4c4c4;
    border-radius: 5px;
    align-self: center;
    margin: 50px auto;
  }
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
    margin-top: 60px;
  }
  // height: 100%;
  //background-color: red;
  .calendar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 286px;
    height: 215px;
    background-color: #f4c268;
    border-radius: 10px;
    margin-top: 130px;
    .logo-uabc {
      position: absolute;
      top: -50px;
    }
  }
}
.options {
  display: flex;
  flex-direction: column;
  position: relative;
  .option-item {
    margin: 0 !important;
    padding-top: 18px;
  }
}
</style>
