<template>
  <div class="about" style="margin-top:70px;">
    <v-list subheader two-line class="pt-5">
      <v-header inset class="header-1 thin">Informes</v-header>

      <v-list-item
        v-for="informe in informes"
        :key="informe"
        :href="'/archivos/informes/' + informe"
      >
        <v-list-item-avatar>
          <v-icon class="grey lighten-1" dark v-text="getMime(informe)" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="informe"></v-list-item-title>

          <!-- <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- <v-btn text v-for="informe in informes" :key="informe" :href="'/archivos/informes/' + informe">
      {{ informe }}
    </v-btn> -->
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "About",
  components: {},
  beforeMount: function() {
    $.getJSON($(location).attr("origin") + "/archivos/informes", data => {
      this.informes = data;
    });
  },
  data: () => ({
    informes: []
  }),
  methods: {
    getMime: function(file) {
      const normalizedFile = file.toLowerCase();
      const dotIndex = normalizedFile.lastIndexOf(".");
      const mime = normalizedFile.substring(dotIndex, file.length);
      switch (mime) {
        case ".pdf":
          return "mdi-file-pdf-box";
        case ".jpg":
          return "mdi-file-image-outline";
        case ".png":
          return "mdi-file-image-outline";
        default:
          return "mdi-folder";
      }
    }
  }
};
</script>
<style lang="scss" scooped>
.about {
  padding-right: 20px;
  padding-left: 20px;
}
</style>
