<template>
  <kinesis-container>
    <kinesis-element :strength="10">
      <CHeader />
    </kinesis-element>
    <kinesis-element :strength="5">
      <router-view />
    </kinesis-element>
    <kinesis-element :strength="15">
      <CFooter />
    </kinesis-element>
  </kinesis-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CFooter from "@/components/CFooter.vue";
import CHeader from "@/components/CHeader.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
(async () => require("normalize.css"))();

export default defineComponent({
  name: "App",
  components: {
    CHeader,
    CFooter,
    KinesisElement,
    KinesisContainer,
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
