import { Options } from '../utils/types';
declare const rollIn: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const rollOut: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { rollIn, rollOut };
