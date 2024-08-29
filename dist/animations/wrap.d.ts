import { Options } from '../utils/types';
declare const wrapInVertical: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const wrapOutVertical: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const wrapInHorizontal: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const wrapOutHorizontal: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { wrapInVertical, wrapOutVertical, wrapInHorizontal, wrapOutHorizontal };
