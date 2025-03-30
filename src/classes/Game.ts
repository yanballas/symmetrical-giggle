import * as PIXI from "pixi.js";

import { Wheel } from "./Wheel";
import { Menu } from "./Menu";

import { IPrizeSectors, IScaleSprite } from "../interfaces/interface";

export class Game extends PIXI.Container {
  private app!: PIXI.Application;
  private appView!: HTMLElement;
  private wheel!: Wheel;
  private menu!: Menu;
  private _balance: number = 1000;
  private balanceText!: PIXI.Text;
  private offset: number = 20;
  public prizeSectors: IPrizeSectors[] = [
    { money: 1000, color: "#E1B42B", deg: [345, 15] },
    { money: 450, color: "#D62828", deg: [15, 45] },
    { money: 100, color: "#1E1E1E", deg: [45, 75] },
    { money: 200, color: "#D62828", deg: [75, 105] },
    { money: 450, color: "#1E1E1E", deg: [105, 135] },
    { money: 100, color: "#D62828", deg: [135, 165] },
    { money: 250, color: "#1E1E1E", deg: [165, 195] },
    { money: 200, color: "#D62828", deg: [195, 225] },
    { money: 100, color: "#1E1E1E", deg: [225, 255] },
    { money: 150, color: "#D62828", deg: [255, 285] },
    { money: 200, color: "#1E1E1E", deg: [285, 315] },
    { money: 100, color: "#D62828", deg: [315, 345] },
  ];

  constructor(app: PIXI.Application, appView: HTMLElement) {
    super();
    this.app = app;
    this.appView = appView;

    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas.bind(this));

    this.loadBackground();
    this.loadWheel();
    this.loadMenu();
    this.showBalance();
  }

  private clearScene(): void {
    this.app.stage.removeChildren();
  }

  private resizeCanvas(): void {
    const width: number = this.appView.offsetWidth;
    const height: number = this.appView.offsetHeight;

    this.app.view.width = width;
    this.app.view.height = height;

    this.clearScene();

    this.loadBackground();
    this.loadWheel();
    this.loadMenu();
    this.showBalance();
  }

  public getBalance(): number {
    return this._balance;
  }

  public updateBalance(amount: number, action: boolean): void {
    if (action) {
      this._balance += amount;
    } else {
      this._balance -= amount;
    }

    this.showBalance();
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

    this.wheel = new Wheel(wheelTexture, this.app, this.prizeSectors);
    const scalePosition: IScaleSprite = Game.updateScale(this.wheel, 85, 90);
    this.wheel.setScale(scalePosition.scaleX, scalePosition.scaleY);

    this.wheel.setPosition(
      this.wheel,
      this.app.screen.width / 2,
      this.app.screen.height / 2,
    );
    this.wheel.addWheel();
  }

  private loadMenu(): void {
    this.menu = new Menu(this.app, this.wheel, this.prizeSectors, this);

    const scalePosition: IScaleSprite = Game.updateScale(
      this.menu.spinButton,
      35,
      35,
    );

    this.menu.spinButton.scale.set(scalePosition.scaleX, scalePosition.scaleY);
    const spinButtonX = this.app.screen.width / 2;
    const spinButtonY =
      this.app.screen.height - (window.innerHeight / 100) * 10;
    this.menu.setPosition(this.menu.spinButton, spinButtonX, spinButtonY);
  }

  private showBalance(): void {
    if (this.balanceText) {
      this.app.stage.removeChild(this.balanceText);
    }

    const fontSize: number = Menu.basedFontSize(0.04, 48);

    this.balanceText = new PIXI.Text(`$${String(this._balance)}`, {
      fontSize: fontSize,
      fill: 0xffffff,
      fontWeight: "bold",
    });
    this.balanceText.anchor.set(0.5, 0.5);
    this.balanceText.x =
      this.app.screen.width -
      this.app.screen.width +
      this.balanceText.width +
      this.offset;
    this.balanceText.y =
      this.app.screen.height - this.balanceText.height - this.offset;

    this.app.stage.addChild(this.balanceText);
  }

  static updateScale(
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
