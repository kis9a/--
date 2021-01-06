<template>
  <transition appear>
    <div v-if="!loading" id="canvas"></div>
    <div v-else class="loading"></div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import kis9aImg from "@/assets/kis9ab.png";
import filterImg from "@/assets/filter.jpg";
import {
  Application,
  Container,
  Sprite,
  settings,
  utils,
  filters,
} from "pixi.js";

export default defineComponent({
  name: "Home",
  component: {},
  setup() {
    const data = reactive({
      loading: true,
    });
    utils.skipHello();
    const pixi = new Application({
      width: 280,
      height: 190,
      transparent: true,
    });
    (pixi.renderer.plugins.interaction.moveWhenInside = !0),
      (pixi.renderer.backgroundColor = 9);
    pixi.stage.interactive = !0;

    const pixiContainer = new Container();
    pixi.stage.addChild(pixiContainer);

    const kis9a = Sprite.from(kis9aImg);
    pixiContainer.addChild(kis9a);
    kis9a.x = 50;
    kis9a.y = -42;
    kis9a.scale.set(0.6);
    kis9a.width = 260;
    kis9a.height = 260;

    const filter = Sprite.from(filterImg);
    filter.scale.set(1.2);
    filter.texture.baseTexture.wrapMode = settings.WRAP_MODE[1];

    const displacementFilter = new filters.DisplacementFilter(filter);
    displacementFilter.padding = 20;
    pixi.stage.addChild(filter);
    kis9a.filters = [displacementFilter];
    displacementFilter.scale.x = 30;
    displacementFilter.scale.y = 50;

    onMounted(async () => {
      const canvas = <HTMLInputElement>document.querySelector("#canvas");
      if (canvas) {
        canvas.append(pixi.view);
      }
      pixi.ticker.add(() => {
        filter.x += 5;
        if (filter.x > filter.width) {
          {
            filter.x = 0;
          }
        }
      });
    });
    data.loading = false;
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
#canvas {
  margin: 60px 0px 40px;
}

.hero {
  width: 90%;
  max-width: 600px;
  mix-blend-mode: multiply;
}

.loading {
  display: block;
  height: 240px;
}

.v-leave-active,
.v-enter-active {
  transition: opacity 0.6s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
