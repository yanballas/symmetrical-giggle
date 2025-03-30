import { innerWidth, isDesktopOrNot } from "../types/types";

export const mobileWidth: number = 539;
export const tabletWidth: number = 767;

export const currentWidth: innerWidth = () =>
  Math.max(document.documentElement?.clientWidth, window.innerWidth || 0);

export const isTablet: isDesktopOrNot = () => currentWidth() < tabletWidth;
export const isMobile: isDesktopOrNot = () => currentWidth() < mobileWidth;
