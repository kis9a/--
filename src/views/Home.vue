<template>
  <div id="canvas"></div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import '@pixi/filter-displacement'
import * as PIXI from 'pixi.js'
import kis9aImg from '@/assets/kis9ab.png'
import filterImg from '@/assets/filter.jpg'

    /* <img alt="kis9a" class="hero" src="@/assets/kis9a.jpg"> */
export default defineComponent({
  name: "Home",
  component: {},
  mounted() {
    PIXI.utils.skipHello();
    const pixi = new PIXI.Application({
      width: 300,
      height: 240,
      transparent: true,
    });
    document.querySelector('#canvas').append(pixi.view);

    pixi.renderer.plugins.interaction.moveWhenInside = !0,
    pixi.renderer.backgroundColor = '#f00';
    pixi.stage.interactive = !0;

    const pixiContainer = new PIXI.Container();
    pixi.stage.addChild(pixiContainer);

    const kis9a = PIXI.Sprite.from(kis9aImg);
    pixiContainer.addChild(kis9a);
    kis9a.x = 50;
    kis9a.y = -42;
    kis9a.scale.set(0.6)
    kis9a.width = 300;
    kis9a.heigh = 300;

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
    displacementFilter.scale.y = 50;

    pixi.ticker.add(() => {
        filter.x += 4;
        if (filter.x > filter.width) {
          { filter.x = 0; }
        }
    });
  }
});
</script>

<style lang="scss">
.hero {
  width: 90%;
  max-width: 600px;
  mix-blend-mode: multiply;
}


</style>
