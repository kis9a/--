<template>
  <div class="c-footer-container">
    <div class="links">
      <a href="https://github.com/kis9a" target="_blank">Github</a>
      <a href="https://medium.com/@kis9a" target="_blank">Medium</a>
      <a href="https://qiita.com/kis9a" target="_blank">Qiita</a>
      <a href="https://twitter.com/kis9a" target="_blank">Twitter</a>
      <a href="https://instagram.com/kis9a" target="_blank">Instagram</a>
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
  color: gray;
}
</style>
