<template>
  <CHeader />
  <router-view />
  <CFooter />
</template>

<script lang="js">
import { defineComponent } from "vue";
import CFooter from "@/components/CFooter.vue";
import CHeader from "@/components/CHeader.vue";
(async () => require('normalize.css'))();

export default defineComponent({
  name: "App",
  components: {
    CHeader,
    CFooter
  }
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

@media (max-width: 1000px) {
  #app {
    width: 90%;
  }
}
</style>
