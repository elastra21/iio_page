import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";
import './plugins/element.js'

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
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  });
