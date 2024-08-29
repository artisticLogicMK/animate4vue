import { Options } from '../utils/types';
declare const skewInRight: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const skewInLeft: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const skewOutRight: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const skewOutLeft: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { skewInRight, skewInLeft, skewOutRight, skewOutLeft };
