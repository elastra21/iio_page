<template>
  <div class="navWrapper">
    <div id="menu" :class="{ active: isActive }">
      <el-menu mode="horizontal" @select="handleSelect" :router="true">
        <el-menu-item id="logo" index="/" :route="{ name: 'Root' }"> </el-menu-item>
        <el-menu-item index="/hello" :route="{ name: 'Hello' }">
          Hello
        </el-menu-item>
        <el-submenu class="el-menu-item" index="2">
          <template slot="title">Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="/projects" :route="{ name: 'Projects' }">
          Projects
        </el-menu-item>
        <el-menu-item index="/about" :route="{ name: 'About' }">
          About
        </el-menu-item>
        <el-menu-item index="/contact" :route="{ name: 'Contact' }">
          Contact
        </el-menu-item>
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
export default {
  components: {},

  data() {
    return {
      activeIndex: "/hello",
      isActive: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    select: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
