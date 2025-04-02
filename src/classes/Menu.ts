import * as PIXI from "pixi.js";
import { OutlineFilter } from "pixi-filters";
import gsap from "gsap";

import { Wheel } from "./Wheel";
import { Game } from "./Game";

import { IBet, IBetButton, IPrizeSectors } from "../interfaces/interface";
import { currentHeight, currentWidth } from "../utils/utils";

export class Menu {
  private wheel: Wheel;
  private app: PIXI.Application;
  private prizeSectors: IPrizeSectors[] = [];
  private buttonsBet: IBetButton[] = [];
  private isMobile!: boolean;
  private topOffset: number = 15;
  private outlineFilter = new OutlineFilter(0, 0xffffff);
  public spinButton: PIXI.Sprite = new PIXI.Sprite(
    PIXI.Texture.from("btnRoll"),
  );
  public game!: Game;
  public bet: IBet | null = null;

  constructor(
    app: PIXI.Application,
    wheel: Wheel,
    prizeSectors: IPrizeSectors[],
    game: Game,
  ) {
    this.app = app;
    this.wheel = wheel;
    this.prizeSectors = this.filterSectors(prizeSectors);
    this.game = game;
    this.isMobile = this.game.isMobile;
    this.initial();
  }

  private filterSectors(sectors: IPrizeSectors[]): IPrizeSectors[] {
    const mapSectors = new Map<string, boolean>();

    return sectors.filter((sector) => {
      const key = `${sector.money}-${sector.color}`;

      if (mapSectors.has(key)) {
        return false;
      }

      mapSectors.set(key, true);
      return true;
    });
  }

  private mapHandleButtons = new Map<PIXI.Graphics | PIXI.Sprite, () => void>();

  private setButtonHandler(
    button: PIXI.Graphics | PIXI.Sprite,
    handler: () => void,
  ) {
    this.clearButtonHandler(button);
    button.on("pointerdown", handler);
    this.mapHandleButtons.set(button, handler);
  }

  private clearButtonHandler(button: PIXI.Graphics | PIXI.Sprite) {
    const existingHandler = this.mapHandleButtons.get(button);
    if (existingHandler) {
      button.off("pointerdown", existingHandler);
      this.mapHandleButtons.delete(button);
    }
  }

  private onHandleSpinButton = (): Promise<void> =>
    this.handleSpinButtonClick();

  private onHandleBetButton = (
    button: PIXI.Graphics,
    money: number,
    color: string,
  ): void => this.handleBetButtonClick(button, money, color);

  private createSpinButton(): void {
    this.spinButton.buttonMode = true;
    this.spinButton.interactive = true;

    this.setButtonHandler(this.spinButton, this.onHandleSpinButton);
    this.app.stage.addChild(this.spinButton);
  }

  public createBetButtons(): void {
    const width: number = currentWidth();

    const buttonWidth: number = width * (this.isMobile ? 0.21 : 0.08);
    const buttonHeight: number = width * 0.04;
    const marginX: number = width * 0.02;
    const marginY: number = width * 0.02;

    const fontSize: number = this.isMobile
      ? Menu.basedFontSize(0.02, 18)
      : Menu.basedFontSize(0.03, 24);

    const columns: number = this.isMobile ? 3 : this.prizeSectors.length;
    const rows: number = Math.ceil(this.prizeSectors.length / columns);

    const totalWidth: number = columns * buttonWidth + (columns - 1) * marginX;
    const startX: number = (window.innerWidth - totalWidth) / 2;
    const startY: number = this.topOffset;

    this.prizeSectors.forEach((sector, index) => {
      const { money, color } = sector;

      const button: IBetButton = new PIXI.Graphics() as IBetButton;
      button.money = money;
      button.color = color;
      button.beginFill(PIXI.utils.string2hex(color));
      button.drawRoundedRect(0, 0, buttonWidth, buttonHeight, 12);
      button.endFill();

      const labelText: PIXI.Text = new PIXI.Text(`$${money}`, {
        fontSize: fontSize,
        fill: 0xffffff,
        fontWeight: "bold",
      });
      labelText.anchor.set(0.5);
      labelText.x = buttonWidth / 2;
      labelText.y = buttonHeight / 2;

      button.addChild(labelText);

      if (this.isMobile) {
        const col: number = index % 3;
        const row: number = Math.floor(index / 3);
        button.x = startX + col * (buttonWidth + marginX);
        button.y = startY + row * (buttonHeight + marginY);

        if (row === rows - 1 && this.prizeSectors.length % 3 !== 0) {
          const missingButtons: number = 3 - (this.prizeSectors.length % 3);
          button.x += (missingButtons * (buttonWidth + marginX)) / 2;
        }
      } else {
        button.x = startX + index * (buttonWidth + marginX);
        button.y = startY;
      }

      button.buttonMode = true;
      button.interactive = true;

      this.setButtonHandler(button, () =>
        this.onHandleBetButton(button, money, color),
      );
      this.buttonsBet.push(button);

      this.app.stage.addChild(button);
    });
  }

  public async handleSpinButtonClick(): Promise<void> {
    const balance = this.game.store.balance;
    if (this.bet === null || balance < this.bet.money) return;

    gsap.killTweensOf(this.spinButton.scale);

    const { x: originalX, y: originalY }: { x: number; y: number } =
      this.spinButton.scale;
    const randomTurn = Math.floor(Math.random() * (10 - 2 + 1)) + 2;

    gsap.fromTo(
      this.spinButton.scale,
      { x: originalX, y: originalY },
      {
        x: originalX * 0.8,
        y: originalY * 0.8,
        duration: 0.2,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
      },
    );

    this.clearButtonHandler(this.spinButton);
    this.buttonsBet.forEach((button) => this.clearButtonHandler(button));
    await this.wheel.rotateWheel(randomTurn, this.bet);
    this.setButtonHandler(this.spinButton, this.onHandleSpinButton);
    this.buttonsBet.forEach((button) =>
      this.setButtonHandler(button, () =>
        this.onHandleBetButton(button, button.money, button.color),
      ),
    );

    this.game.showBalance();
    this.bet = null;
  }

  public handleBetButtonClick(
    currentButton: PIXI.Graphics,
    money: number,
    color: string,
  ): void {
    this.bet = {
      money,
      color,
    };

    if (currentButton.filters?.includes(this.outlineFilter)) return;

    this.outlineFilter.thickness = 0;

    this.buttonsBet.forEach((button) => {
      button.filters?.forEach((filter) => gsap.killTweensOf(filter));
      button.filters = [];
    });

    currentButton.filters = [this.outlineFilter];
    gsap.to(this.outlineFilter, {
      thickness: 4,
      duration: 0.4,
      ease: "power2.out",
    });
  }

  public setPosition(
    uiElement: PIXI.Sprite | PIXI.Text | PIXI.Graphics,
    x: number,
    y: number,
  ): void {
    if (!(uiElement instanceof PIXI.Graphics)) uiElement.anchor.set(0.5, 0.5);
    uiElement.x = x;
    uiElement.y = y;
  }

  public initial(): void {
    this.createSpinButton();
    this.createBetButtons();
  }

  static basedFontSize(
    percentOfScreen: number,
    maxSize: number = 36,
    minSize: number = 14,
  ): number {
    const vw: number = currentWidth() / 100;
    const vh: number = currentHeight() / 100;
    const vmin: number = Math.min(vw, vh);

    const calculatedSize: number = vmin * percentOfScreen * 100;

    return Math.max(minSize, Math.min(maxSize, calculatedSize));
  }
}
