<template>
  <transition appear>
    <div v-if="!loading" class="c-footer-container">
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
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default defineComponent({
  name: "CFooter",
  data() {
    return {
      loading: false,
    }
  },
  components: {
    GithubIcon,
    TwitterIcon,
    MailIcon,
  },
});
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 12px 8px;
}
a {
  padding: 4px;
  font-size: 12px;
}

.ion {
  font-size: 16px;
  color: black;
}

.v-leave-active,
.v-enter-active {
  transition: opacity 3.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
