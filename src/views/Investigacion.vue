<template>
  <div class="investigacion">
    <v-container fluid class=" mt-15" style="position:relative" v-if="data !== null">
      <v-row justify="center" style=" margin-top:50px; position:relative" no-gutters>
        <v-col cols="12" md="7" lg="7" xl="6" class="px-10 d-flex flex-column">
          <v-img
            class="image__investigacion"
            v-if="images.length > 0"
            width="100%"
            height="350px"
            :src="images[0]"
          >
            <h4 class="image-inner-text">{{ this.data.title }}</h4>
          </v-img>
          <h5>{{ $t("descripcion") }}</h5>
          <p class="body mt-3" v-html="data.description" />
          <h5>{{ $t("vision.title") }}</h5>
          <p class="body" v-html="data.mision" />
          <h5>{{ $t("mision.title") }}</h5>
          <p class="body" v-html="data.vision" />

          <div v-if="data.ca">
            <h5>Cuerpos Académicos</h5>
            <div class="px-3" v-for="ca in data.ca" :key="ca.name">
              <h6 class="mt-10">-{{ ca.name }}</h6>
              <div
                class="px-5"
                v-for="(integrante, index) in ca.integrantes"
                :key="integrante.name"
              >
                <WorkerCell
                  :workerDetails="showInfo"
                  :worker="getWorker(integrante)"
                  style="margin:60px 0 40px 0; "
                />
                <h6>Biografía</h6>
                <p class="body px-5 mt-3">{{ integrante.biografia }}</p>
              </div>
            </div>
          </div>

          <h5 v-if="data.proyectos_vigentes">Proyectos vigentes del área</h5>
          <p class="body" v-if="data.proyectos_vigentes" v-html="data.proyectos_vigentes" />

          <h5 v-if="data.tesistas">Tesistas Activos</h5>
          <p class="body" v-if="data.tesistas" v-html="data.tesistas" />

          <h5 v-if="data.serv_y_lab">Servicios y Laboratorios</h5>
          <div class="px-3" v-if="data.serv_y_lab">
            <h6 v-if="data.serv_y_lab.laboratorios">Laboratorios</h6>
            <p
              class="body"
              v-if="data.serv_y_lab.laboratorios"
              v-html="data.serv_y_lab.laboratorios"
            />
            <h6 style="margin: 0 20px" v-if="data.serv_y_lab.servicios">Servicios</h6>
            <p class="body" v-if="data.serv_y_lab.servicios" v-html="data.serv_y_lab.servicios" />
          </div>

          <h5 v-if="data.estudiantes">Dirección de estudiantes</h5>
          <p class="body" v-if="data.estudiantes" v-html="data.estudiantes" />
        </v-col>

        <v-col cols="2" style="max-width:300px; width: 300px !important; position:relative">
          <div v-if="!isTablet" class="aside">
            <div class="wrapper-shit">
              <h6>{{ $t("investigacion.title") }}</h6>
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
              <h6 style="margin-top:95px">{{ $t("posgrados.title") }}</h6>

              <div class="options  ">
                <router-link
                  :to="{ path: '/posgrados/doctorado-en-medio-ambiente-y-desarrollo' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Doctorado en Medio Ambiente y Desarrollo
                </router-link>
                <router-link
                  :to="{ path: '/posgrados/gestion-ambiental' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Especialidad en Gestión Ambiental
                </router-link>
                <router-link
                  :to="{ path: '/posgrados/oceanografia-costera' }"
                  class="links option-item"
                  style="width:300px"
                >
                  Oceanografía Costera
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
          </div>
        </v-col>
      </v-row>
      <WorkerDetails :worker="selectedWorker" :open="workerDrawer" :close="closeDrawer" />
    </v-container>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "investigacion",
  components: {
    WorkerCell: () => import(/* webpackPrefetch: true */ "../components/Lists/WorkerCell.vue"),
    WorkerDetails: () => import(/* webpackPrefetch: true */ "../components/Form/workerDetails.vue")
  },
  data: () => ({
    isTablet: window.innerWidth < 960,
    data: null,
    publicPath: $(location).attr("origin") + "/archivos/investigacion/",
    images: [],
    selectedWorker: null,
    workerDrawer: false
  }),
  computed: {
    altLogo: () => require("../assets/logo_uabc_alt.png"),
    calendarLink: function() {
      return this.$info.about.information.calendarLink;
    },
    loadData() {
      this.images = [];
      this.data = this.$info.investigaciones.find(
        investigacion => investigacion.name === this.$route.params.especiality
      );
      if (!this.data) {
        this.$router.push({ name: "404" });
      } else {
        const loading = this.$loading();
        const { name } = this.data;
        $.getJSON($(location).attr("origin") + `/archivos/investigacion/${name}`, data => {
          if (data !== null)
            data.forEach((image, i) => {
              this.images.push(this.publicPath + `${name}/${image}`);
            });
          setTimeout(() => loading.close(), 1000);
        });
      }
    }
  },
  methods: {
    showInfo(worker, state) {
      this.selectedWorker = worker;
      this.workerDrawer = state;
    },
    closeDrawer() {
      this.workerDrawer = false;
    },
    getWorker(worker) {
      const { id } = worker;
      return this.$info.about.personal[id];
    },
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
.image-inner-text {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  color: white;
}
.investigacion {
  display: flex;
  position: relative;
  // padding-top: 200px;

  .image__investigacion {
    width: 623px;
    height: 245px;
    background-color: #c4c4c4;
    border-radius: 5px;
    align-self: center;
    margin: 50px auto;
  }
}
ul {
  padding-left: 35px;
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
<style lang="scss">
.investigacion {
  ul {
    padding-left: 35px !important;
  }
}
</style>
