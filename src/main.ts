import "./style.css";

import * as PIXI from "pixi.js";
import { Boot } from "./classes/Boot";

async function initGame() {
  try {
    const app = new PIXI.Application({
      resizeTo: window,
    });
    globalThis.__PIXI_APP__ = app;

    const appView: HTMLElement | null = document.querySelector("#app");

    if (appView === null) throw new Error("Container doesnt exsist");

    appView.appendChild(app.view);

    new Boot(app, appView);
  } catch (error) {
    console.error("Failed to initialize game:", error);
  }
}

if (document.readyState === "complete") {
  initGame();
} else {
  window.addEventListener("DOMContentLoaded", initGame);
}
