import * as PIXI from "pixi.js";

import { Wheel } from "./Wheel";
import { Menu } from "./Menu";

import {
  currentHeight,
  currentWidth,
  isMobile,
  isTablet,
} from "../utils/utils";

import { IPrizeSectors } from "../interfaces/interface";
import { AssetsManager } from "./AssetsManager";
import { Store } from "./Store";

export class Game extends PIXI.Container {
  private app!: PIXI.Application;
  private appView!: HTMLElement;
  private wheel!: Wheel;
  private menu!: Menu;
  private balanceText!: PIXI.Text;
  private offset: number = 20;
  public store!: Store;
  public isTablet: boolean = isTablet();
  public isMobile: boolean = isMobile();
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

  constructor(app: PIXI.Application, appView: HTMLElement, store: Store) {
    super();
    this.app = app;
    this.appView = appView;
    this.store = store;
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

    this.isTablet = isTablet();
    this.isMobile = isMobile();

    this.clearScene();

    this.loadBackground();
    this.loadWheel();
    this.loadMenu();
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
    const wheelTexture: PIXI.Texture = AssetsManager.getTexture("wheel");

    this.wheel = new Wheel(wheelTexture, this.app, this, this.prizeSectors);

    if (this.isTablet) Game.updateScale(this.wheel, 90, 60);
    else Game.updateScale(this.wheel, 80, 90);

    this.wheel.setPosition(
      this.wheel,
      this.app.screen.width / 2,
      this.app.screen.height / 2,
    );
    this.wheel.addWheel();
  }

  private loadMenu(): void {
    this.menu = new Menu(this.app, this.wheel, this.prizeSectors, this);

    if (this.isTablet) Game.updateScale(this.menu.spinButton, 45, 40);
    else Game.updateScale(this.menu.spinButton, 35, 35);

    const spinButtonX = this.app.screen.width / 2;
    const spinButtonY =
      this.app.screen.height - (window.innerHeight / 100) * 10;
    this.menu.setPosition(this.menu.spinButton, spinButtonX, spinButtonY);
  }

  public showBalance(): void {
    if (this.balanceText) {
      this.app.stage.removeChild(this.balanceText);
    }

    const fontSize: number = Menu.basedFontSize(0.06, 48);

    this.balanceText = new PIXI.Text(`$${String(this.store.balance)}`, {
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

  static updateScale(sprite: PIXI.Sprite, vw: number, vh: number): void {
    const screenWidth: number = currentWidth();
    const screenHeight: number = currentHeight();

    const targetWidth: number = (screenWidth * vw) / 100;
    const targetHeight:number = (screenHeight * vh) / 100;

    const originalWidth: number = sprite.texture.width;
    const originalHeight: number = sprite.texture.height;

    const scaleX: number = targetWidth / originalWidth;
    const scaleY: number = targetHeight / originalHeight;

    const finalScale: number = Math.min(scaleX, scaleY);

    sprite.scale.set(finalScale);
  }
}
