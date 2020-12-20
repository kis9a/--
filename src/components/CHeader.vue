<template>
  <transition appear>
    <div v-if="!loading" id="nav">
      <router-link to="/">
        <h1>
          KIS9A
        </h1>
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
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  opacity: 1;
}

h1 {
  color: black;
  font-size: 16px;
  display: block;
  margin: 0px;
  padding: 4px;
  width: 8%;
}

.v-leave-active,
.v-enter-active {
  transition: opacity 2s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
