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
        <a
          href="https://zenn.dev/kis9a"
          target="_blank"
          aria-label="zenn"
          rel="noopener"
        >
          <svg
            width="1em"
            height="1em"
            class="ion zenn-svg"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Zenn</title>
            <path
              d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z"
            />
          </svg>
        </a>
        <a
          href="https://me.kis9a.com"
          target="_blank"
          aria-label="document"
          rel="noopener"
        >
          <DocumentIcon />
        </a>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import DocumentIcon from "vue-ionicons/dist/md-document.vue";

export default defineComponent({
  name: "CFooter",
  components: {
    GithubIcon,
    TwitterIcon,
    DocumentIcon,
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
  padding: 4px 5px;
  margin: auto 0;
}

.ion {
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
