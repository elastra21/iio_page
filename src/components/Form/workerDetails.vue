<template>
  <el-drawer
    :title="worker ? worker.name + ' ' + worker.lastName : '.l.'"
    :visible.sync="isOpen"
    direction="rtl"
    size="420px"
    ref="drawer"
    class="worker-drawer"
  >
    <v-container fluid v-if="worker !== null">
      <v-row class="px-8">
        <v-col cols="12" class="d-flex justify-center align-center">
          <v-avatar class="profile" color="grey" size="140">
            <v-img
              v-if="worker.image.length > 0 && !setInitials"
              :src="baseUrl"
              v-on:error="setInitials = true"
            />
            <span v-else class="white--text header-fg-alt">
              {{ initials(worker) }}
            </span>
          </v-avatar>
        </v-col>
        <v-col cols="12">
          <v-text-field
            readonly
            class="py-0"
            :value="worker.name + ' ' + worker.lastName"
            background-color="white lighten"
            prepend-inner-icon="mdi-account"
          />
        </v-col>
        <v-col cols="12" v-if="worker.position.length > 0">
          <v-text-field
            readonly
            class="capitalize py-0"
            :value="position"
            background-color="white lighten"
            prepend-inner-icon="mdi-briefcase"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            readonly
            class="py-0"
            :value="worker.phone"
            background-color="white lighten"
            prepend-inner-icon="mdi-phone"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            readonly
            class="py-0"
            :value="worker.ext"
            background-color="white lighten"
            prefix="ext."
          />
        </v-col>
        <v-col cols="12" class="pb-0">
          <v-text-field
            readonly
            class="capitalize py-0"
            :value="worker.email"
            background-color="white lighten"
            prepend-inner-icon="mdi-email"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-expansion-panels
          :value="0"
          v-if="theres_aditional_data"
          style=" border-radius:0px"
          flat
          class="pt-0 "
        >
          <v-expansion-panel>
            <v-expansion-panel-header>
              Información Adicional
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="px-5">
                <v-col cols="12" v-if="worker.nombramiento">
                  <v-text-field
                    hide-details
                    v-if="worker.nombramiento"
                    readonly
                    class="py-0"
                    label="Nombramiento"
                    :value="worker.nombramiento"
                    background-color="white lighten"
                  />
                </v-col>
                <v-col cols="12" v-if="worker.investigationLine">
                  <label class="v-label v-label--active theme--light">
                    Líneas de Investigación
                  </label>
                  <ol v-for="investigation in worker.investigationLine" :key="investigation">
                    <li class="capitalize">{{ investigation }}</li>
                  </ol>
                </v-col>
                <v-col cols="12" v-if="worker.principal">
                  <v-text-field
                    readonly
                    class="py-0"
                    label="Área de Enfoque"
                    :value="worker.principal"
                    background-color="white lighten"
                  />
                </v-col>
                <v-col cols="12" v-if="worker.workStation">
                  <v-text-field
                    readonly
                    label="Estación de trabajo"
                    class="py-0"
                    :value="worker.workStation"
                    background-color="white lighten"
                  />
                </v-col>
                <v-col cols="12" v-if="theres_links">
                  <v-text-field
                    readonly
                    v-if="worker.orcid"
                    label="ORCID"
                    class="capitalize py-0"
                    :value="worker.orcid"
                    @click.stop="goToLink(worker.orcid)"
                    background-color="white lighten"
                  />
                  <v-text-field
                    readonly
                    v-if="worker.googleAcademic"
                    label="Google Academic"
                    class="capitalize py-0"
                    :value="worker.googleAcademic"
                    background-color="white lighten"
                    @click.stop="goToLink(worker.googleAcademic)"
                  />
                  <v-text-field
                    readonly
                    v-if="worker.researchgate"
                    label="Researchgate"
                    class="capitalize py-0"
                    :value="worker.researchgate"
                    background-color="white lighten"
                    @click.stop="goToLink(worker.researchgate)"
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </el-drawer>
</template>

<script>
import $ from "jquery";
export default {
  name: "WorkerDetails",
  props: {
    worker: Object,
    open: Boolean,
    close: Function
  },
  data() {
    return {
      isOpen: false,
      setInitials: false
    };
  },
  computed: {
    position() {
      const { worker } = this;
      return worker.position.toLowerCase();
    },
    theres_aditional_data() {
      const {
        nombramiento,
        investigationLine,
        principal,
        workStation,
        orcid,
        googleAcademic,
        researchgate
      } = this.worker;
      return (
        nombramiento ||
        investigationLine ||
        principal ||
        workStation ||
        orcid ||
        googleAcademic ||
        researchgate
      );
    },
    theres_links() {
      const { orcid, googleAcademic, researchgate } = this.worker;
      return orcid || googleAcademic || researchgate;
    },
    baseUrl() {
      const { worker } = this;
      const fileName = worker.image;
      const response = $(location).attr("origin") + "/archivos/personal/" + fileName;
      return response;
    }
  },
  watch: {
    open: function(value) {
      this.setInitials = false;
      this.isOpen = value;
    },
    isOpen(value) {
      if (!value) {
        this.setInitials = false;
        this.close();
      }
    }
  },
  methods: {
    goToLink(link) {
      window.location = link;
    },
    initials(worker) {
      if (worker) {
        return worker.name.charAt(0) + worker.lastName.charAt(0);
      }
      return "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global";
.header-fg-alt {
  color: #222a42;
  line-height: 1.05;
  font-weight: 400;
  font-size: 47px;
  font-family: "Poppins";
  text-transform: capitalize;
}
.v-expansion-panel {
  border-bottom: 1px solid #bbbbbb;
  .v-expansion-panel-header {
    height: 54px !important;

    .mdi-chevron-down::before {
      color: #b5b5b5;
      content: "\F0142" !important;
    }
  }
}
</style>
<style lang="scss">
.worker-drawer {
  .v-text-field {
    input {
      cursor: pointer !important;
    }
  }
}
</style>
