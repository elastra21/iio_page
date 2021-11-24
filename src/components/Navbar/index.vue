<template>
  <!-- { active: isActive } -->
  <div class="navWrapper dark-menu" :class="[navClass]">
    <div id="menu" :class="{ active: isActive }">
      <el-menu
        :background-color="backgroundColor"
        :text-color="color"
        :mode="'horizontal'"
        @select="handleSelect"
        :router="true"
      >
        <el-menu-item id="logo" index="/" :route="{ path: '/' }">
          <v-img
            :transition="false"
            alt="Vuetify Logo"
            :style="
              navClass !== 'light-menu'
                ? '-webkit-filter: grayscale(1);filter: grayscale(1)'
                : '-webkit-filter: grayscale(0);filter: grayscale(0);'
            "
            style="margin-left:-20px; "
            contain
            :src="logo"
            transition="scale-transition"
            width="125"
          />
        </el-menu-item>
        <el-menu-item index="/" :route="{ path: '/' }">
          {{ $t("inicio") }}
        </el-menu-item>
        <el-submenu class="el-menu-item" index="/nosotros">
          <template slot="title">{{ $t("nosotros.title") }}</template>
          <el-menu-item
            :style="'color:' + color + '!important'"
            index="/nosotros"
            :route="{ path: '/nosotros' }"
          >
            {{ $t("nosotros.conocenos") }}
          </el-menu-item>
          <el-menu-item
            :style="'color:' + color + '!important'"
            index="/personal"
            :route="{ path: '/personal' }"
          >
            {{ $t("nosotros.personal") }}
          </el-menu-item>
        </el-submenu>
        <el-submenu class="el-menu-item" index="3">
          <template slot="title">{{ $t("investigacion.title") }}</template>
          <!-- <el-menu-item index="/investigacion" :route="{ path: '/investigacion' }">
            Investigaciones
          </el-menu-item> -->

          <!-- <el-menu-item index="/Áreas de investigación" :route="{ path: '/Areas' }">
            Áreas de investigación
          </el-menu-item> -->

          <!-- <el-submenu class="el-menu-item" index="/Áreas de investigación"> -->
          <!-- <template slot="title">Investigación</template> -->
          <el-menu-item
            index="/investigacion/Acuacultura"
            :route="{ path: '/investigacion/Acuacultura' }"
          >
            {{ $t("investigacion.acuacultura") }}
          </el-menu-item>
          <el-menu-item
            index="investigacion/ecologia-marina-integrativa"
            :route="{
              path: '/investigacion/ecologia-marina-integrativa'
            }"
          >
            {{ $t("investigacion.ecologia") }}
          </el-menu-item>
          <el-menu-item
            index="/investigacion/biogeoquimica-marina-y-cambio-global"
            :route="{
              path: '/investigacion/biogeoquimica-marina-y-cambio-global'
            }"
          >
            {{ $t("investigacion.biogeoquimica") }}
          </el-menu-item>
          <el-menu-item
            index="/investigacion/ciencias-ambientales-y-del-agua"
            :route="{
              path: '/investigacion/ciencias-ambientales-y-del-agua'
            }"
          >
            {{ $t("investigacion.ciencias") }}
          </el-menu-item>
          <el-menu-item
            index="/investigacion/oceanografia-fisica"
            :route="{ path: '/investigacion/oceanografia-fisica' }"
          >
            {{ $t("investigacion.oceanografia") }}
          </el-menu-item>
          <el-menu-item
            index="/investigacion/laboratorio-de-paleoceanografia"
            :route="{ path: '/investigacion/laboratorio-de-paleoceanografia' }"
          >
            {{ $t("investigacion.laboratorio") }}
          </el-menu-item>
          <!-- </el-submenu> -->
        </el-submenu>

        <!-- <el-menu-item index="/nosotros" :route="{ path: '/nosotros' }">
          Nosotros
        </el-menu-item> -->
        <!-- <el-menu-item index="/investigacion" :route="{ path: '/investigacion' }">
          Investigación
        </el-menu-item> -->
        <!-- <el-menu-item index="/posgrados" :route="{ path: '/posgrados' }">
          Posgrados
        </el-menu-item> -->
        <el-submenu class="el-menu-item" index="4">
          <template slot="title">{{ $t("posgrados.title") }}</template>
          <!-- <el-menu-item index="/posgrados" :route="{ path: '/posgrados' }">
            Oferta Académica
          </el-menu-item> -->
          <el-submenu class="" index="/posgrados">
            <template slot="title">{{ $t("posgrados.oferta") }}</template>
            <el-menu-item
              index="/posgrados/doctorado-en-medio-ambiente-y-desarrollo"
              :route="{ path: '/posgrados/doctorado-en-medio-ambiente-y-desarrollo' }"
            >
              {{ $t("posgrados.doctorado") }}
            </el-menu-item>
            <el-menu-item
              index="/posgrados/gestion-ambiental"
              :route="{ path: '/posgrados/gestion-ambiental' }"
            >
              {{ $t("posgrados.gestion") }}
            </el-menu-item>
            <el-menu-item
              index="/posgrados/oceanografia"
              :route="{ path: '/posgrados/oceanografia-costera' }"
            >
              {{ $t("posgrados.oceanografia") }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item>
            <a :href="calendarLink">{{ $t("posgrados.calendario") }}</a>
          </el-menu-item>
          <!-- <el-menu-item index="/Oceanografia" :route="{ path: '/oceanografia-costera' }">
            Oceanografía Costera
          </el-menu-item> -->
        </el-submenu>
        <el-menu-item index="/transparencia" :route="{ path: '/transparencia' }">
          {{ $t("transparencia") }}
        </el-menu-item>
        <el-menu-item
          index="/incidencia-social"
          :route="{ path: '/incidencia-social' }"
          :class="$vuetify.breakpoint.mdAndUp ? 'pt-3' : null"
          v-html="$t('incidencia')"
        >
        </el-menu-item>

        <el-submenu class="el-menu-item" index="/tramites">
          <template slot="title">{{ $t("tramites.title") }}</template>
          <el-menu-item>
            <a href="http://ambiente.ens.uabc.mx/oficios-comision">{{ $t("tramites.oficios") }}</a>
          </el-menu-item>
          <el-menu-item>
            <a href="https://sibecas.uabc.mx/admin">
              {{ $t("tramites.solicitudes") }}
            </a>
          </el-menu-item>
          <el-menu-item>
            <a href="http://siii.uabc.mx">{{ $t("tramites.sistema") }}</a>
          </el-menu-item>
          <el-menu-item>
            <a href="http://www.uabc.mx/recursos/">{{ $t("tramites.reembolso") }}</a>
          </el-menu-item>
          <el-menu-item>
            <a href="http://www.uabc.mx/recursos/Formatos/ManualExpedienteConstanciaTrabajo.pdf">
              {{ $t("tramites.constancia") }}
            </a>
          </el-menu-item>
          <el-menu-item>
            <a href="http://www.uabc.mx/recursos/Formatos/ManualExpedienteConstanciaTrabajo.pdf">
              {{ $t("tramites.registro") }}
            </a>
          </el-menu-item>
          <el-menu-item>
            <a href="http://www.uabc.mx/recursos/Formatos/ManualExpedienteConstanciaTrabajo.pdf">
              {{ $t("tramites.sabaticos") }}
            </a>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div id="toggle" @click="select()">
      <div class="span" id="top" :class="{ active: isActive }"></div>
      <div class="span" id="middle" :class="{ active: isActive }"></div>
      <div class="span" id="bottom" :class="{ active: isActive }"></div>
    </div>
  </div>
</template>

<script>
import config from "../../config";

export default {
  components: {},
  computed: {
    logo: () => require("../../assets/logo_iio.png"),
    calendarLink: function() {
      return this.$info.about.information.calendarLink;
    }
  },
  data() {
    return {
      activeIndex: "/",
      isActive: false,
      backgroundColor: "white",
      pageAttrs: null,
      isTablet: window.innerWidth <= 992,
      navClass: "",
      backgroundColor: "",
      color: ""
    };
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.onresize);
    const attrs = config.headerAtributes.find(page => page.name === this.$route.name);
    this.pageAttrs = attrs;
    this.ColorNav();
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.onresize);
  },
  watch: {
    "$route.name"(to, from) {
      this.isActive = false;
      const attrs = config.headerAtributes.find(page => page.name === to);
      this.pageAttrs = attrs;
      this.ColorNav();
    }
  },
  methods: {
    ColorNav(force) {
      if (force) {
        this.navClass = "light-menu";
        this.backgroundColor = "white";
        this.color = config.colors.midgrey;
      } else {
        if (this.pageAttrs) {
          this.navClass = "dark-menu";
          this.backgroundColor = config.colors.darkblue;
          this.color = "white";
        } else {
          this.navClass = "light-menu";
          this.backgroundColor = "white";
          this.color = config.colors.midgrey;
        }
      }
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onresize: function() {
      this.isTablet = window.innerWidth <= 992;
    },
    select: function() {
      this.isActive = !this.isActive;
    },
    handleScroll(event) {
      const { pageAttrs } = this;
      if (pageAttrs) {
        if (window.scrollY > config.headerConstants[pageAttrs.tier - 1]) {
          this.ColorNav(true);
        } else this.ColorNav();
      }
    }
  }
};
</script>
