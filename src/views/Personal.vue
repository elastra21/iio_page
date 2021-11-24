<template>
  <v-container class="pt-0 " style="margin-top:80px;" fluid>
    <!-- <v-row align="center" justify="center" class="tier-2 header">
      <div class="d-flex white-filter" />
      <v-col class=" d-flex text-center flex-column ">
        <h2 class="uppercase white--text pl-2">Personal</h2>
      </v-col>
      <v-col class=" d-flex  flex-column ">
        <p class="body header-description white--text">
          Sed volutpat lorem a ligula condimentum laoreet. Suspendisse sagittis risus sed viverra
          tristique. Nullam id ex pharetra.
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
    </v-row> -->
    <v-container>
      <v-row class="mt-5">
        <v-col sm="5" md="4" lg="3" xl="3" cols="12">
          <v-text-field
            v-model="search"
            placeholder="Buscar"
            background-color="white lighten"
            prepend-inner-icon="mdi-magnify"
            v-on:keydown="onChange"
          />
        </v-col>

        <v-col sm="5" md="4" lg="3" xl="3" cols="12" class="ml-auto">
          <v-select
            v-model="filtro"
            background-color="white lighten"
            placeholder="Todas"
            item-text="noLinea"
            item-value="_id"
            label="Filtrar"
            prefix="Categoría: "
            :items="tags"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-layout row wrap v-for="tag in tags" :key="tag" v-if="sectionShouldShow(tag)">
        <v-flex data-aos="fade-right" xs12 sm12 md12 lg12 xl12>
          <h3 class="mt-5 mb-2">-{{ tag || "Otros" }}</h3>
        </v-flex>
        <v-flex
          class="align-center d-flex xs12 sm6 md6 lg6 xl6 justify-center"
          v-for="(personal, index) in onChange(search, orden, filtro, tag)"
          :key="index"
        >
          <WorkerCell
            :workerDetails="showInfo"
            data-aos="fade-up"
            :worker="personal"
            style="margin-bottom:40px"
          />
        </v-flex>
        <div
          class="d-flex align-center justify-center"
          style="height:200px; width:100%"
          v-if="onChange(search, orden, filtro, tag).length == 0"
        >
          <h6 class="light">No hay Información para mostrar</h6>
        </div>
      </v-layout>
    </v-container>
    <WorkerDetails :worker="selectedWorker" :open="workerDrawer" :close="closeDrawer" />
    <ScrollToTop />
  </v-container>
</template>
<script>
import { WorkerCell } from "../components/Lists";
import { WorkerDetails } from "../components/Form";

export default {
  name: "Personal",
  components: {
    WorkerCell,
    WorkerDetails,
    ScrollToTop: () => import(/* webpackPrefetch: true */ "../components/Form/scrollToTop.vue")
  },
  data() {
    return {
      search: "",
      tags: [],
      filtro: "",
      orden: "",
      filters: [],
      workerDrawer: false,
      selectedWorker: null
    };
  },
  computed: {
    personal: function() {
      return this.$info.about.personal;
    }
  },
  beforeMount: function() {
    this.filters = [
      ...new Set(
        this.$info.about.personal.map(worker => {
          return worker.position.toLowerCase().replace(/^\w/, c => c.toUpperCase());
        })
      )
    ];
    const leShit = [
      ...new Set(
        this.$info.about.personal.map(worker =>
          (worker.lastName + " " + worker.name + ".jpg")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace("dr. ", "")
            .replace("dra. ", "")
            .replace(/ /g, "_")
        )
      )
    ];
    this.tags = [
      ...new Set(
        this.$info.about.personal.map(worker =>
          worker.tag.toLowerCase().replace(/^\w/, c => c.toUpperCase())
        )
      )
    ];
    this.tags.unshift("Todos");
    leShit.sort(function(a, b) {
      return a.localeCompare(b);
    });
  },
  methods: {
    sectionShouldShow(tag) {
      if (tag != "Todos") {
        if (this.filtro == "Todos" || this.filtro.length == 0) {
          return true;
        } else {
          return tag.toLowerCase() === this.filtro.toLowerCase();
        }
      } else {
        return false;
      }
    },
    showInfo(worker, state) {
      this.selectedWorker = worker;
      this.workerDrawer = state;
    },
    closeDrawer() {
      this.workerDrawer = false;
    },
    onChange(search, orden, filtro, tag) {
      const filteredByName = this.personal.filter(worker =>
        (worker.name + " " + worker.lastName)
          .toUpperCase()
          .includes(search.toString().toUpperCase())
      );

      const filterTag = filteredByName.filter(
        worker => worker.tag.toLowerCase() === tag.toLowerCase()
      );

      const applyedFilter = filterTag.filter(worker => {
        if (filtro !== "Todos" && filtro.length > 0) {
          return worker.tag.toLowerCase() === this.filtro.toLowerCase();
        } else {
          return true;
        }
      });

      return applyedFilter;
    }
  }
};
</script>
<style lang="scss" scoped>
.header-description {
  max-width: 284px;
  height: 91px;
}
</style>
