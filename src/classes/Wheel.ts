import * as PIXI from "pixi.js";
import gsap from "gsap";

import { Game } from "./Game";

import { IBet, IPrizeSectors } from "../interfaces/interface";
import { AssetsManager } from "./AssetsManager";

export class Wheel extends PIXI.Sprite {
  private app!: PIXI.Application;
  private game!: Game;
  private rotateTicker: PIXI.TickerCallback<unknown> | null = null;
  private arrow!: PIXI.Sprite;
  private sectorWidth: number = 30;
  public prizeSectors: IPrizeSectors[] = [];
  public isWin: boolean = false;

  constructor(
    wheelTexture: PIXI.Texture,
    app: PIXI.Application,
    game: Game,
    prizeSectors: IPrizeSectors[],
  ) {
    super(wheelTexture);
    this.app = app;
    this.game = game;
    this.prizeSectors = prizeSectors;
  }

  private drawDebugWheelSkeleton(): void {
    const skeleton: PIXI.Graphics = new PIXI.Graphics();
    const centerX: number = this.x;
    const centerY: number = this.y;
    const radius: number = (this.width / 3) * 1;

    skeleton.lineStyle(2, 0x00ff00, 0.5);
    skeleton.drawCircle(centerX, centerY, radius);

    for (let i = 0; i < this.prizeSectors.length; i++) {
      const angle: number = i * this.sectorWidth;
      const radian: number = angle * (Math.PI / 180);

      skeleton.moveTo(centerX, centerY);
      skeleton.lineTo(
        centerX + Math.sin(radian) * radius,
        centerY - Math.cos(radian) * radius,
      );

      const text: PIXI.Text = new PIXI.Text(`${angle}°`, {
        fill: 0xffffff,
        fontSize: 12,
        fontWeight: "bold",
      });
      text.anchor.set(0.5);
      text.position.set(
        centerX + Math.sin(radian) * (radius + 25),
        centerY - Math.cos(radian) * (radius + 25),
      );
      this.app.stage.addChild(text);
    }

    skeleton.lineStyle(3, 0xff0000);
    skeleton.moveTo(centerX, centerY - radius);
    skeleton.lineTo(centerX, centerY - radius - 30);

    this.app.stage.addChild(skeleton);
  }

  private drawArrowWheel(): void {
    const arrowTexture: PIXI.Texture = AssetsManager.getTexture("arrow");
    this.arrow = new PIXI.Sprite(arrowTexture);
    this.setPosition(
      this.arrow,
      this.x,
      this.y - this.height / 2 + this.height / 6,
    );
    this.arrow.rotation = Math.PI;
    Game.updateScale(this.arrow, 10, 10);

    this.app.stage.addChild(this.arrow);
  }

  public getWinningPrize(rotation: number): IPrizeSectors | null {
    const degrees: number = (rotation * 180) / Math.PI;
    const normalizedAngle: number = Math.round((360 - (degrees % 360)) % 360);

    return (
      this.prizeSectors.find((sector) => {
        const [start, end] = sector.deg;
        if (start < end) {
          return normalizedAngle >= start && normalizedAngle < end;
        } else {
          return normalizedAngle >= start || normalizedAngle < end;
        }
      }) || null
    );
  }

  public addWheel(): void {
    this.app.stage.addChild(this);
    this.pivot.set(0.5, 0.5);
    this.drawArrowWheel();
    this.drawDebugWheelSkeleton();
  }

  public setPosition(sprite: PIXI.Sprite, x: number, y: number): void {
    sprite.anchor.set(0.5, 0.5);
    sprite.x = x;
    sprite.y = y;
  }

  public setScale(scaleX: number, scaleY: number): void {
    this.scale.set(scaleX, scaleY);
  }

  public rotateWheel(turn: number, bet: IBet): void {
    this.stopRotation();

    const baseRotation: number = turn * Math.PI * 2;
    const randomSector: number = Math.random() * Math.PI * 2;
    const totalRotation: number = baseRotation + randomSector;
    const duration: number = 1000;

    let tick: number = 0;
    let rotationPassed: number = 0;

    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    this.rotateTicker = () => {
      tick++;

      const t: number = Math.min(tick / duration, 1);
      const easedT: number = easeOutCubic(t);

      const currentRotation: number = totalRotation * easedT;
      const delta: number = currentRotation - rotationPassed;

      this.rotation += delta;
      rotationPassed = currentRotation;

      if (tick >= duration) {
        this.stopRotation();

        const prize: IBet | null = this.getWinningPrize(this.rotation);

        if (prize === null) return;

        if (prize.money === bet.money && prize.color === bet.color) {
          this.isWin = true;
          console.log("Success: Winning sector matches the bet!", {
            bet: bet,
            prize: prize,
          });
          this.game.updateBalance(prize.money, this.isWin);
        } else {
          this.isWin = false;
          console.log("Failed: Winning sector doesn't match the bet", {
            bet: bet,
            prize: prize,
          });
          this.game.updateBalance(bet.money, this.isWin);
        }

        console.log(`Your balance ${this.game.getBalance()}`);
      }
    };

    this.app.ticker.add(this.rotateTicker);
  }

  public stopRotation(): void {
    if (this.rotateTicker) {
      this.app.ticker.remove(this.rotateTicker);
      this.rotateTicker = null;
    }
  }
}
