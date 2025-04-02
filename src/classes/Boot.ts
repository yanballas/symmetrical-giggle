import * as PIXI from "pixi.js";

import { AssetsManager } from "./AssetsManager";
import { Game } from "./Game";
import { Store } from "./Store";

export class Boot {
  private app!: PIXI.Application;
  private appView!: HTMLElement;
  private store!: Store;

  constructor(app: PIXI.Application, appView: HTMLElement) {
    this.app = app;
    this.appView = appView;
    this.store = new Store();
    this.init();
  }

  private async init(): Promise<void> {
    const error: Error = new Error("Boot doesn't init");
    try {
      await AssetsManager.load();
      console.log("loading complete");
      new Game(this.app, this.appView, this.store);
    } catch {
      console.error(error.message);
    }
  }
}
