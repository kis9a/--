<template>
  <div id="nav">
    <router-link to="/">KIS9A</router-link>
  </div>
  <div id="canvas"></div>
  <router-view />
  <CFooter />
</template>

<script lang="js">
import CFooter from "@/components/CFooter.vue";
import { defineComponent } from "vue";
import '@pixi/filter-displacement'
import * as PIXI from 'pixi.js'
import kis9aImg from '@/assets/kis9ab.png'
import filterImg from '@/assets/filter.jpg'
import "normalize.css";

export default defineComponent({
  name: "App",
  components: {
    CFooter,
  },
  mounted() {
    const pixi = new PIXI.Application({
      width: 450,
      height: 350,
      transparent: true,
    });
    document.querySelector('#canvas').append(pixi.view);

    pixi.renderer.plugins.interaction.moveWhenInside = !0,
    pixi.stage.interactive = !0;

    const pixiContainer = new PIXI.Container();
    pixi.stage.addChild(pixiContainer);

    const kis9a = PIXI.Sprite.from(kis9aImg);
    pixiContainer.addChild(kis9a);
    kis9a.x = 0;
    kis9a.y = -80;
    kis9a.width = 500;
    kis9a.heigh = 500;

    const filter = PIXI.Sprite.from(filterImg);
    filter.scale.set(1);
    filter.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    const graphics= new PIXI.Graphics();
    graphics.interactive = !0;
    graphics.button = !1;
    pixi.stage.addChild(graphics);
    graphics.beginFill(0, 0.0001);
    graphics.drawRect(10, 10, 680, 580);
    graphics.endFill();

    const displacementFilter = new PIXI.filters.DisplacementFilter(filter);
    displacementFilter.padding = 20;
    pixi.stage.addChild(filter);
    kis9a.filters = [displacementFilter];
    displacementFilter.scale.x = 30;
    displacementFilter.scale.y = 60;

    pixi.ticker.add(() => {
        filter.x += 5;
        if (filter.x > filter.width) {
          { filter.x = 0; }
        }
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
