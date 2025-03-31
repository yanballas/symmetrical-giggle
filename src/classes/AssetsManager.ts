import * as PIXI from "pixi.js";

import bg from "/bg-1.webp";
import wheel from "/wheel.webp";
import btnRoll from "/btn-roll.webp";
import arrow from "/arrow.webp";

export class AssetsManager {
  private static loader = PIXI.Loader.shared;

  static load(): Promise<void> {
    const error: Error = new Error("Problem with assets");

    return new Promise((resolve, reject) => {
      this.loader
        .add("bg", bg)
        .add("wheel", wheel)
        .add("btnRoll", btnRoll)
        .add("arrow", arrow)
        .load(() => resolve())
        .onError.add(() => reject(error.message));
    });
  }

  static getTexture(key: string): PIXI.Texture {
    const resource = this.loader.resources[key];
    if (!resource || !resource.texture) {
      throw new Error(`Texture "${key}" not found or not loaded`);
    }
    return resource.texture;
  }
}
