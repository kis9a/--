<template>
  <div class="c-footer-container">
    <div class="links">
      <a href="https://github.com/kis9a" target="_blank" rel="noopener">
        <GithubIcon />
      </a>
      <a href="https://instagram.com/kis9a" target="_blank" rel="noopener">
        <InstagramIcon />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubIcon from 'vue-ionicons/dist/logo-github.vue';
import InstagramIcon from 'vue-ionicons/dist/logo-instagram.vue';

export default defineComponent({
  name: "CFooter",
  props: {
    msg: String,
  },
  components: {
    GithubIcon,
    InstagramIcon
  }
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

.ion {
  font-size: 20px;
  color: black;
}
</style>
