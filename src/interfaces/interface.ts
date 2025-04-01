import * as PIXI from "pixi.js";

export interface IScaleSprite {
  scaleX: number;
  scaleY: number;
}

export interface IPrizeSectors {
  money: number;
  color: string;
  deg: [number, number];
}

export interface IBet {
  money: number;
  color: string;
}

export interface IBetButton extends PIXI.Graphics {
  money: number;
  color: string;
}
