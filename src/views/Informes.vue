<template>
  <v-container fluid class="pa-0" style="margin-top:150px;">
    <v-container class="mb-15">
      <h2 class=" pl-2">Informes</h2>
      <v-row class="informes">
        <v-col
          class="col-md-4 col-lg-3 col-xl-3 col-6 thumbnail-container"
          v-for="(pdf, index) in data"
          :key="index"
        >
          <v-card
            height="280"
            width="200"
            hover
            outlined
            class="thumbnail"
            style="margin:10px; padding:10px; position:relative"
            @click="goTo(pdf)"
          >
            <div class="cover-container">
              <canvas class="pdf" :id="`pdf-${index}`" />
            </div>
            <div class="name">
              {{ pdf }}
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-btn text v-for="informe in informes" :key="informe" :href="'/archivos/informes/' + informe">
      {{ informe }}
    </v-btn> -->
    </v-container>
  </v-container>
</template>

<script>
import $ from "jquery";
export default {
  name: "About",
  data: () => ({
    data: []
  }),
  mounted: function() {
    this.loading = this.$loading();
    this.publicPath = $(location).attr("origin") + "/archivos/informes/";
    $.getJSON(this.publicPath, data => {
      data.map(image => {
        if (!image.match("index.php")) {
          this.data.push(image);
        }
      });
    }).then(() =>
      this.data.map((pdf_url, index) => {
        this.renderThumbnails(this.publicPath + pdf_url, index);
      })
    );
  },
  methods: {
    goTo(pdf_path) {
      window.location = this.publicPath + pdf_path;
    },
    async renderThumbnails(pdf_url, index) {
      import("pdfjs-dist").then(async pdfjsLib => {
        let pdf = await pdfjsLib.getDocument({ url: pdf_url });
        const page = await pdf.getPage(1);
        let viewport = page.getViewport({ scale: 1.0 });
        viewport = page.getViewport({ scale: this.width / 612 });
        let canvas = document.getElementById(`pdf-${index}`);
        canvas.height = viewport.viewBox[3];
        canvas.width = viewport.viewBox[2];
        const context = canvas.getContext("2d");
        await page.render({ canvasContext: context, viewport: viewport }).then(() => {
          if (index == this.data.length - 1) {
            this.loading.close();
          }
        });
      });
    },
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
.informes {
  margin-top: 44px;
}

.thumbnail-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.thumbnail {
  display: flex;
  justify-content: center;
  max-width: 200px;
  max-height: 280px;
  .cover-container {
    display: flex;
    overflow: hidden;
    justify-content: center;
    max-width: 155px;
    border-radius: 2px;
    height: 200px;
    border: 0.5px lightgrey solid;
  }
  .name {
    position: absolute;
    bottom: 20px;
    text-align: center;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    font-size: 14px;
  }
}
.pdf {
  opacity: 0.8;
  transform: rotate(180deg) scale(-1, 1);
}
</style>
