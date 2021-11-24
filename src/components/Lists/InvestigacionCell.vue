<template>
  <div class="">
    <v-img :aspect-ratio="1 / 1" cover class="circle" :src="image">
      <v-btn :to="path" outlined dark class="inner-image">
        {{ $t("leerMas") }}
      </v-btn>
    </v-img>
    <h6 class="text px-3" v-text="investigacion.title" />
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Investigacion_cell",
  data() {
    return {
      publicPath: $(location).attr("origin") + "/archivos/investigacion/",
      image: null
    };
  },
  props: {
    investigacion: Object
  },
  beforeMount: function() {
    const { name } = this.investigacion;
    $.getJSON($(location).attr("origin") + `/archivos/investigacion/${name}`, data => {
      this.image = this.publicPath + `${name}/${data[0]}`;
    });
  },
  computed: {
    path() {
      return { path: `/investigacion/${this.investigacion.name}` };
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/global";
.circle {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 250px !important;
  width: 250px !important;
  min-height: 250px !important;
  min-width: 250px !important;
  transition: all 0.3s ease-in-out;
}
.circle::after {
  position: absolute;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  opacity: 0;
  content: "";
}

.circle:hover {
  border-radius: 0px;
  cursor: pointer;
  &::after {
    opacity: 1;
  }
}

.inner-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  // width: 100%;
  text-align: center;
  padding-top: 0px;
  transition: all 0.3s ease-in-out;
  z-index: 2000;
  margin-top: 10px;
}
.circle:hover .inner-image {
  opacity: 1;
}

.text {
  //position: absolute;
  color: #fff;
  opacity: 1;
  width: 100%;
  text-align: center;
  padding-top: 0px;
  transition: all 0.3s ease-in-out;
  z-index: 2000;
  color: black;
  margin-top: 10px;
}
</style>
