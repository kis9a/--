class LiquidEffect {
  constructor({
    appendTo: e,
    image: t,
    speed: i,
    displacementImage: n,
    displacementScale: a,
    intensityX: s,
    intensityY: o,
  }) {
    (this.appendTo = e),
      (this.image = t),
      (this.speed = i),
      (this.displacementImage = n),
      (this.displacementScale = a),
      (this.intensityX = s),
      (this.intensityY = o),
      this.generateCanvas(e, t, i, n, a, s, o);
  }
  generateCanvas(e, t, i, n, a, s, o) {
    PIXI.utils.skipHello();
    const l = new PIXI.Application({
      width: 160,
      height: 130,
      transparent: true,
      resolution: window.devicePixelRatio || 1,
    });
    document.querySelector(e).append(l.view),
      (l.renderer.plugins.interaction.moveWhenInside = !0),
      (l.stage.interactive = !0);

    const d = new PIXI.Container();
    l.stage.addChild(d);
    const r = PIXI.Sprite.from(t);

    d.addChild(r),
      (r.x = 80),
      (r.y = 60),
      r.anchor.set(0.5),
      r.scale.set(1),
      (r.width = 125),
      (r.height = 75)

    const c = PIXI.Sprite.from(n);
    c.scale.set(a),
      (c.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT),
      (c.position = r.position),
      l.stage.addChild(c);

    const p = new PIXI.Graphics();
    (p.interactive = !0),
      (p.buttonMode = !1),
      l.stage.addChild(p),
      p.beginFill(0, 0.001),
      p.drawRect(10, 10, 680, 580),
      p.endFill();

    const h = new PIXI.filters.DisplacementFilter(c);
    h.padding = 20;

    const g = new PIXI.filters.RGBSplitFilter();
    (r.filters = [h, g]),
      (h.scale.x = 15 * s),
      (h.scale.y = 25 * o)

    let I = 0;
    l.ticker.add(() => {
      // p.on("pointermove", (e) => {
      //   (I = e.data.global.x / e.data.global.y),
      //     (g.red = [5 * I, 0]),
      //     (g.green = [0, 1]),
      //     (g.blue = [5 * I, 0]);
      // }),
      //   p.on("pointerout", (e) => {
      //     (g.red = [0, 0]), (g.green = [0, 0]), (g.blue = [0, 0]);
      //   }),
        (c.x += i),
        c.x > c.width && (c.x = 0);
    });
  }
}










const app = new PIXI.Application();
document.body.appendChild(app.view);

app.stage.interactive = true;

const container = new PIXI.Container();
app.stage.addChild(container);

const flag = PIXI.Sprite.from('examples/assets/pixi-filters/flag.png');
container.addChild(flag);
flag.x = 100;
flag.y = 100;

const displacementSprite = PIXI.Sprite.from('examples/assets/pixi-filters/displacement_map_repeat.jpg');
// Make sure the sprite is wrapping.
displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
displacementFilter.padding = 10;

displacementSprite.position = flag.position;

app.stage.addChild(displacementSprite);

flag.filters = [displacementFilter];

displacementFilter.scale.x = 30;
displacementFilter.scale.y = 60;

app.ticker.add(() => {
    // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
    displacementSprite.x++;
    // Reset x to 0 when it's over width to keep values from going to very huge numbers.
    if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }
});


















