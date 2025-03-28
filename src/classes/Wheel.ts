import * as PIXI from "pixi.js";

export class Wheel extends PIXI.Sprite {
  private app!: PIXI.Application;
  private rotateTicker: PIXI.TickerCallback<unknown> | null = null;

  constructor(wheelTexture: PIXI.Texture, app: PIXI.Application) {
    super(wheelTexture);
    this.app = app;
  }

  public addWheel(): void {
    this.app.stage.addChild(this);
  }

  public setPosition(x: number, y: number): void {
    this.anchor.set(0.5, 0.5);
    this.x = x;
    this.y = y;
  }

  public setScale(scaleX: number, scaleY: number): void {
    this.scale.set(scaleX, scaleY);
  }

  public rotateWheel(turn: number): void {
    this.stopRotation();

    const baseRotation: number = turn * Math.PI * 2;
    const randomSector: number = Math.random() * Math.PI * 2;
    const totalRotation: number = baseRotation + randomSector;
    const duration: number = 800;
    let rotationPassed: number = 0;
    let tick: number = 0;

    const ease = (t: number): number => {
      return t < 0.5 ? 3.2 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    this.rotateTicker = () => {
      tick++;

      const t: number = Math.min(tick / duration, 1);
      const easedT: number = ease(t);

      const currentRotation: number = totalRotation * easedT;
      const delta: number = currentRotation - rotationPassed;

      this.rotation += delta;
      rotationPassed = currentRotation;

      if (tick >= duration) {
        this.stopRotation();
        this.rotation = totalRotation % (Math.PI * 2);
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
