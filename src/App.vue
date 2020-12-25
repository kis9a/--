<template>
  <CHeader />
  <router-view />
  <CFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CFooter from "@/components/CFooter.vue";
import CHeader from "@/components/CHeader.vue";
(async () => require("normalize.css"))();

export default defineComponent({
  name: "App",
  components: {
    CHeader,
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
  margin: 6% auto;
  width: 72%;
  max-width: 580px;
}

@media (max-width: 1000px) {
  #app {
    width: 90%;
  }
}
</style>
