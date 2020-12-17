<template>
  <div id="nav">
    <router-link to="/">KIS9A</router-link>
  </div>
  <router-view />
  <CFooter />
</template>

<script lang="js">
import CFooter from "@/components/CFooter.vue";
import { defineComponent } from "vue";
import * as PIXI from 'pixi.js'
import kis9a from './assets/kis9a.jpg'
import "normalize.css";

export default defineComponent({
  name: "App",
  components: {
    CFooter,
  },
  mounted() {
    const app = new PIXI.Application();
    document.body.appendChild(app.view);
    const bunny = PIXI.Sprite.from(kis9a);
    console.log(bunny)
    // center the sprite's anchor point
    bunny.anchor.set(0.5);

    // move the sprite to the center of the screen
    bunny.x =  100
    bunny.y = app.screen.height / 2;

    app.stage.addChild(bunny);

    app.ticker.add(() => {
        // just for fun, let's rotate mr rabbit a little
        bunny.rotation += 0.1;
    });
  }
});
</script>

<style lang="scss">

* {
  background-color: #f00;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5% auto;
  width: 76%;
  max-width: 640px;
}

#nav {
  padding: 15px;
  text-align: start;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  font-size: 15px;
  opacity: 0.9;
}

#nav a.router-link-exact-active {
  color: inherit;
  opacity: 1;
}

@media (max-width: 1000px) {
  #app {
    width: 90%;
  }
}
</style>
