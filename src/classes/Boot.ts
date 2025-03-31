import * as PIXI from "pixi.js";

import { Game } from "./Game";
import { AssetsManager } from "./AssetsManager";

export class Boot {
  private app!: PIXI.Application;
  private appView!: HTMLElement;

  constructor(app: PIXI.Application, appView: HTMLElement) {
    this.app = app;
    this.appView = appView;
    this.init();
  }

  private async init(): Promise<void> {
    const error: Error = new Error("Boot doesn't init");
    try {
      await AssetsManager.load();
      console.log("loading complete");
      new Game(this.app, this.appView);
    } catch {
      console.error(error.message);
    }
  }
}
