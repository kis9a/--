<template>
  <div class="home">
    <img alt="kis9a" class="hero" src="@/assets/kis9a.jpg">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss">
.hero {
  width: 90%;
  max-width: 600px;
  mix-blend-mode: multiply;
}


</style>
