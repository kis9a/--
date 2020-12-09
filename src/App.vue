<template>
  <div id="nav">
    <router-link to="/">KIS9A</router-link>
  </div>
  <router-view />
  <CFooter />
</template>

<script lang="ts">
import CFooter from "@/components/CFooter.vue";
import { defineComponent } from "vue";
import "normalize.css";

export default defineComponent({
  name: "App",
  components: {
    CFooter,
  },
});
</script>

<style lang="scss">

* {
  background-color: #f00;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5% auto;
  width: 76%;
  max-width: 640px;
}

#nav {
  padding: 15px;
  text-align: start;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  font-size: 15px;
  opacity: 0.9;
}

#nav a.router-link-exact-active {
  color: inherit;
  opacity: 1;
}

@media (max-width: 1000px) {
  #app {
    width: 90%;
  }
}
</style>
