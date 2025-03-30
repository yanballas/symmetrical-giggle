import * as PIXI from "pixi.js";
import { Wheel } from "./Wheel";

import { IBet, IPrizeSectors } from "../interfaces/interface";
import { Game } from "./Game";

export class Menu {
  private wheel: Wheel;
  private app: PIXI.Application;
  private prizeSectors: IPrizeSectors[] = [];
  private topOffset: number = 15;
  public spinButton: PIXI.Sprite = new PIXI.Sprite(
    PIXI.Texture.from("btnRoll"),
  );
  public game!: Game;
  public betButtons: PIXI.Graphics[] = [];
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

  public setPosition(
    uiElement: PIXI.Sprite | PIXI.Text | PIXI.Graphics,
    x: number,
    y: number,
  ): void {
    if (!(uiElement instanceof PIXI.Graphics)) uiElement.anchor.set(0.5, 0.5);
    uiElement.x = x;
    uiElement.y = y;
  }

  private createSpinButton(): void {
    this.spinButton.interactive = true;
    this.spinButton.buttonMode = true;
    this.spinButton.on("pointerdown", () => {
      const balance = this.game.getBalance();
      if (this.bet === null || balance < this.bet.money) return;
      const randomTurn = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
      this.wheel.rotateWheel(randomTurn, this.game, this.bet);
      this.bet = null;
    });
    this.app.stage.addChild(this.spinButton);
  }

  public createBetButtons(): void {
    const isMobile: boolean = window.innerWidth < 767;

    const buttonWidth: number = window.innerWidth * (isMobile ? 0.21 : 0.08);
    const buttonHeight: number = window.innerHeight * 0.06;
    const marginX: number = window.innerWidth * 0.02;
    const marginY: number = window.innerHeight * 0.02;

    const fontSize: number = Menu.basedFontSize(0.03, 24);

    const columns: number = isMobile ? 3 : this.prizeSectors.length;
    const rows: number = Math.ceil(this.prizeSectors.length / columns);

    const totalWidth: number = columns * buttonWidth + (columns - 1) * marginX;
    const startX: number = (window.innerWidth - totalWidth) / 2;
    const startY: number = this.topOffset;

    this.prizeSectors.forEach((sector, index) => {
      const { money, color } = sector;

      const button: PIXI.Graphics = new PIXI.Graphics();
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

      if (isMobile) {
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

      button.interactive = true;
      button.buttonMode = true;
      button.on("pointerdown", () => this.handleBetButtonClick(money, color));

      this.app.stage.addChild(button);
    });
  }

  public handleBetButtonClick(money: number, color: string): void {
    this.bet = {
      money,
      color,
    };
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
    const screenMin = Math.min(window.innerWidth, window.innerHeight);
    const calculatedSize = screenMin * percentOfScreen;

    return Math.max(minSize, Math.min(maxSize, calculatedSize));
  }
}
