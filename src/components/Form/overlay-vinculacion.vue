<template>
  <v-dialog v-model="show" z-index="2000" transition="dialog-top-transition" max-width="600">
    <v-card v-if="content !== null">
      <h6 class="pt-3 px-4">{{ content.subtitle }}</h6>

      <v-card-text class="mt-3">
        <v-img width="100%" max-height="200px" :src="imageURL" />
        <div class="body-2 mt-4">
          {{ content.description }}
        </div>
        <br />
        <a :href="content.link" v-text="content.link" />
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text @click="onClose">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import $ from "jquery";
export default {
  name: "Overlay-Vinculacion",
  data: () => ({
    publicPath: $(location).attr("origin") + "/archivos/vinculacion/"
  }),
  computed: {
    imageURL: function() {
      return this.publicPath + this.content.image;
    }
  },
  props: {
    show: Boolean,
    onClose: Function,
    content: Object
  },
  watch: {
    content: function(value) {
      console.warn(value);
    }
  }
};
</script>
<style lang="scss">
.v-overlay {
  z-index: 2000 !important;
}
</style>
<style lang="scss" scoped>
.v-dialog__content {
  z-index: 2010 !important;
}
</style>
