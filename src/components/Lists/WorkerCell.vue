<template>
  <v-card @click.stop="workerDetails(worker, true)" flat class=" box-card pa-0">
    <v-avatar class="profile" color="grey" size="102">
      <v-img
        v-if="worker.image.length > 0 && !setInitials"
        :src="baseUrl"
        v-on:error="setInitials = true"
      />
      <span v-else class="white--text header-fg-alt">
        {{ initials }}
      </span>
    </v-avatar>
    <div class="bottom-section d-flex">
      <h6>{{ name }}</h6>
      <span class="position body">
        {{ position }}
      </span>
      <div class="d-flex mt-2">
        <a class="links" :href="'tel:' + this.worker.phone">
          {{ this.worker.phone }}
        </a>
        <span class="links ml-4" v-html="ext" />
      </div>
      <div>
        <a class="links" :href="'mailto:' + this.worker.email">
          {{ this.worker.email }}
        </a>
      </div>
    </div>
  </v-card>
</template>
<script>
import $ from "jquery";
export default {
  name: "NoticiasCell",
  props: {
    worker: Object,
    workerDetails: Function
  },
  computed: {
    baseUrl() {
      const { worker } = this;
      const fileName = worker.image;
      return $(location).attr("origin") + "/archivos/personal/" + fileName;
    },
    name() {
      return this.worker.name + " " + this.worker.lastName;
    },
    ext() {
      const { ext } = this.worker;
      return ext.length > 0 ? `ext. ${ext}` : null;
    },
    initials() {
      const { worker } = this;
      return worker.name.charAt(0) + worker.lastName.charAt(0);
    },
    position() {
      return this.worker.position.toLowerCase();
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      setInitials: false
    };
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 492px;
  height: 118px;
  margin: 10px;
  display: flex;
}
.header-fg-alt {
  color: #222a42;
  line-height: 1.05;
  font-weight: 400;
  font-size: 47px;
  font-family: "Poppins";
  text-transform: capitalize;
}
.bottom-section {
  width: 100%;
  flex: 1;
  flex-direction: column;
  padding-left: 15px;
  .position {
    text-transform: capitalize;
  }
}
</style>
