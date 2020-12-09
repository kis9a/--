<template>
  <div class="c-footer-container">
    <div class="links">
      <a href="https://github.com/kis9a" target="_blank" rel="noopener">
        <ion-icon name="logo-github"></ion-icon>
      </a>
      <a href="https://instagram.com/kis9a" target="_blank" rel="noopener">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CFooter",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 15px;
}
a {
  padding: 4px;
  font-size: 12px;
}

ion-icon {
  font-size: 18px;
  color: black;
}
</style>
