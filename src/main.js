import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/index.scss"; // global css
import "./plugins/element.js";
import i18n from "./i18n";

Vue.config.productionTip = false;

fetch(process.env.BASE_URL + "config/home.json")
  .then(response => response.json())
  .then(info => {
    Vue.prototype.$info = info;
    new Vue({
      created() {
        AOS.init({
          duration: 800
        });
      },
      i18n,
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  });
