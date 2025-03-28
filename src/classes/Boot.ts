import * as PIXI from "pixi.js";

import { Game } from "./Game";

import bg from "/bg-1.webp";
import wheel from "/wheel.webp";
import btnRoll from "/btn-roll.webp";

export class Boot {
  private gameLoader: PIXI.Loader = PIXI.Loader.shared;

  constructor() {
    this.init();
  }

  private async init(): Promise<void> {
    try {
      await this.loadAssets();
      console.log("loading complete");
      new Game();
    } catch (error: unknown) {
      console.error(new Error(`can't loading ${error}`));
    }
  }

  private loadAssets(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.gameLoader
        .add("bg", bg)
        .add("wheel", wheel)
        .add("btnRoll", btnRoll)
        .load(() => {
          resolve();
        })
        .onError.add((error: unknown) => {
          reject(`${error}`);
        });
    });
  }
}
