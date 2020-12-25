<template>
  <transition appear>
    <div v-if="!loading" id="nav">
      <router-link to="/">
        <h1>KIS9A</h1>
      </router-link>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CHeader",
  data() {
    return {
      loading: false,
    };
  },
});
</script>

<style lang="scss" scoped>
#nav {
  padding: 12px 6px;
  text-align: start;
  display: flex;
  flex-direction: left;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  opacity: 1;
}

h1 {
  color: black;
  font-size: 16px;
  font-weight: 600;
  display: block;
  margin: 0px;
  padding: 4px;
  letter-spacing: 1.2px;
}

.v-leave-active,
.v-enter-active {
  transition: opacity 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
