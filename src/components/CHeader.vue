<template>
  <transition appear>
    <div v-if="!loading" id="nav">
      <router-link to="/">KIS9A</router-link>
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
  padding: 12px 8px;
  text-align: start;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  font-size: 15px;
  opacity: 1;
}

.v-leave-active,
.v-enter-active {
  transition: opacity 3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
