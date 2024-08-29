import { Options } from '../utils/types';
declare const openTopRight: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const openTopLeft: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const openBottomRight: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const openBottomLeft: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const closeTopRight: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const closeTopLeft: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const closeBottomRight: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const closeBottomLeft: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { openTopLeft, openTopRight, openBottomLeft, openBottomRight, closeTopLeft, closeTopRight, closeBottomLeft, closeBottomRight };
