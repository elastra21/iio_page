<template>
  <v-container fluid class="pa-0" style="margin-top:150px;">
    <v-container class="mb-15">
      <h2 class=" pl-2">Transparencia</h2>
      <v-layout row wrap class="mt-15">
        <v-flex
          xs12
          sm6
          md6
          lg6
          xl6
          class="align-center justify-center d-flex"
          v-for="(proceso, index) in procesos"
          :key="index"
        >
          <ProcessCell data-aos="fade-up" :data-aos-delay="50 * index" :process="proceso" />
        </v-flex>
      </v-layout>
    </v-container>
    <ScrollToTop />
  </v-container>
</template>

<script>
import { ProcessCell } from "../components/Lists";
import { ScrollToTop } from "../components/Form";
export default {
  name: "transparencia-wrapper",
  components: { ProcessCell, ScrollToTop },
  data: () => ({
    procesos: [
      {
        name: "Estatutos, Reglamentos y Manuales",
        image: "",
        subtitle: "Normatividad del Instituto y nuestro Manual de Organización.",
        route: "#"
      },
      {
        name: "Informes",
        image: "",
        subtitle: "Los informes de actividades de los directores del Instituto.",
        route: "Informes"
      },
      {
        name: "Consejos, Comités y Academias",
        image: "",
        subtitle:
          "Integrantes de las distintas comisiones y comités que integran nuestro instituto. ",
        route: "#"
      },
      {
        name: "Brigada de Seguridad ",
        image: "",
        subtitle: "Integrantes de la brigada de seguridad del Instituto.",
        route: ""
      }
    ]
  })
};
</script>
<style lang="scss" scooped>
.transparencia-wrapper {
  margin-top: 80px;
}
</style>
