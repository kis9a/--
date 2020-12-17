<template>
  <div class="c-footer-container">
    <div class="links">
      <a href="https://github.com/kis9a" target="_blank" rel="noopener">
        <GithubIcon />
      </a>
      <a href="https://twitter.com/kis9a" target="_blank" rel="noopener">
        <TwitterIcon />
      </a>
      <a href="mailto:kis9ax@gmail.com">
        <MailIcon />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default defineComponent({
  name: "CFooter",
  props: {
    msg: String,
  },
  components: {
    GithubIcon,
    TwitterIcon,
    MailIcon,
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

.ion {
  font-size: 20px;
  color: black;
}
</style>
