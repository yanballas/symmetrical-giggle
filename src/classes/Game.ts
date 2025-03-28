import * as PIXI from "pixi.js";

import { Wheel } from "./Wheel";
import { IScaleSprite } from "../interfaces/interface";

export class Game extends PIXI.Container {
  private app!: PIXI.Application;
  private appView: HTMLElement | null = document.querySelector("#app");
  private wheel!: Wheel;

  constructor() {
    super();
    this.app = new PIXI.Application({
      resizeTo: window,
    });

    if (this.appView) {
      this.appView.appendChild(this.app.view);
      this.resizeCanvas();
      window.addEventListener("resize", this.resizeCanvas.bind(this));

      this.loadBackground();
      this.loadWheel();
      this.loadMenu();
    } else {
      throw new Error("appView doesn't exists");
    }
  }

  private clearScene(): void {
    this.app.stage.removeChildren();
  }

  private resizeCanvas(): void {
    if (this.appView) {
      const width: number = this.appView.offsetWidth;
      const height: number = this.appView.offsetHeight;

      this.app.view.width = width;
      this.app.view.height = height;

      this.clearScene();

      this.loadBackground();
      this.loadWheel();
      this.loadMenu();
    }
  }

  private loadBackground(): void {
    const backgroundTexture: PIXI.Texture = PIXI.Texture.from("bg");
    const bgTilingSprite = new PIXI.TilingSprite(backgroundTexture);

    bgTilingSprite.width = this.app.view.width;
    bgTilingSprite.height = this.app.view.height;

    this.app.stage.addChild(bgTilingSprite);
  }

  private loadWheel(): void {
    const wheelTexture: PIXI.Texture = PIXI.Texture.from("wheel");

    this.wheel = new Wheel(wheelTexture, this.app);
    const scalePosition: IScaleSprite = this.updateScale(this.wheel, 85, 90);
    this.wheel.setScale(scalePosition.scaleX, scalePosition.scaleY);

    this.wheel.addWheel();

    this.wheel.setPosition(
      this.app.screen.width / 2,
      this.app.screen.height / 2,
    );
  }

  private loadMenu(): void {
    const buttonTexture: PIXI.Texture = PIXI.Texture.from("btnRoll");
    const spinButton = new PIXI.Sprite(buttonTexture);
    console.log(spinButton);

    spinButton.interactive = true;
    spinButton.buttonMode = true;

    spinButton.on("pointerdown", () => {
      const randomTurn = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
      this.wheel.rotateWheel(randomTurn);
    });

    const scalePosition: IScaleSprite = this.updateScale(spinButton, 50, 40);
    spinButton.scale.set(scalePosition.scaleX, scalePosition.scaleY);

    spinButton.anchor.set(0.5, 0.5);
    spinButton.x = this.app.screen.width / 2;
    spinButton.y = this.app.screen.height - (window.innerHeight / 100 * 10);

    this.app.stage.addChild(spinButton);
  }

  private updateScale(
    sprite: PIXI.Sprite,
    widthPercent: number,
    heightPercent: number,
  ): IScaleSprite {
    const vw: number = window.innerWidth / 100;
    const vh: number = window.innerHeight / 100;

    const desiredWidth: number = vw * widthPercent;
    const desiredHeight: number = vh * heightPercent;

    const aspectRatio: number = sprite.width / sprite.height;

    const scaleX: number = desiredWidth / sprite.width;
    const scaleY: number = desiredHeight / sprite.height;

    const scale = Math.min(scaleX, scaleY);

    const scalePercent: IScaleSprite = {
      scaleX: scale,
      scaleY: scale / aspectRatio,
    };

    return scalePercent;
  }
}
