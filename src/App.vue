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
import kis9aImg from '@/assets/kis9a.png'
import filterImg from '@/assets/filter.jpg'
import "normalize.css";

export default defineComponent({
  name: "App",
  components: {
    CFooter,
  },
  mounted() {
    /* const app = new PIXI.Application(); */
    /* document.body.appendChild(app.view); */

    /* app.stage.interactive = true; */

    /* const container = new PIXI.Container(); */
    /* app.stage.addChild(container); */

    /* const flag = PIXI.Sprite.from(kis9aImg); */
    /* container.addChild(flag); */
    /* flag.x = 100; */
    /* flag.y = 100; */

    /* const displacementSprite = PIXI.Sprite.from(filterImg); */
    /* // Make sure the sprite is wrapping. */
    /* displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT; */
    /* const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite); */
    /* displacementFilter.padding = 10; */

    /* displacementSprite.position = flag.position; */

    /* app.stage.addChild(displacementSprite); */

    /* flag.filters = [displacementFilter]; */

    /* displacementFilter.scale.x = 30; */
    /* displacementFilter.scale.y = 60; */

    /* app.ticker.add(() => { */
    /*     // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates. */
    /*     displacementSprite.x++; */
    /*     // Reset x to 0 when it's over width to keep values from going to very huge numbers. */
    /*     if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; } */
    /* }); */

    PIXI.utils.skipHello();
    const pixi = new PIXI.Application({
      width: 160,
      height: 130,
      transparent: true
    });
    /* document.querySelector('#canvas').append(pixi.view); */
    document.body.appendChild(pixi.view);
    pixi.renderer.plugins.interaction.moveWhenInside = !0,
    pixi.stage.interactive = !0;

    const pixiContainer = new PIXI.Container();
    pixi.stage.addChild(pixiContainer);
    const kis9a = PIXI.Sprite.from(kis9aImg);

    pixiContainer.addChild(kis9a),
    kis9a.x = 40;
    kis9a.y = 50;
    kis9a.anchor.set(0.5);
    kis9a.scale.set(1);
    kis9a.width = 125;
    kis9a.height = 75;

    const filter = PIXI.Sprite.from(filterImg);
    filter.scale.set(8);
    filter.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    filter.position = kis9a.position;
    pixi.stage.addChild(filter);

    const graphics= new PIXI.Graphics();
    graphics.interactive = !0;
    graphics.button = !1;
    pixi.stage.addChild(graphics);
    graphics.beginFill(0, 0.0001);
    graphics.drawRect(10, 10, 680, 580);
    graphics.endFill();

    const displacement = new PIXI.filters.DisplacementFilter(filter)
    displacement.padding = 20;

    kis9a.filter = displacement;
    displacement.scale.x = 15 * 8;
    displacement.scale.y = 30 * 8;

    pixi.ticker.add(() => {
      displacement.x += 4;
      if (displacement.x > displacement.width) {
         displacement.x = 0;
      }
    })
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
