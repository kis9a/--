<template>
  <transition appear>
    <div v-if="!loading" class="c-footer-container">
      <div class="links">
        <a
          href="https://twitter.com/kis9a"
          target="_blank"
          aria-label="twitter"
          rel="noopener"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com/kis9a"
          target="_blank"
          aria-label="github"
          rel="noopener"
        >
          <GithubIcon />
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
  components: {
    GithubIcon,
    TwitterIcon,
  },
  data() {
    return {
      loading: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 6px 8px;
}

a {
  padding: 6px;
}

.ion {
  font-size: 16px;
  color: black;
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
