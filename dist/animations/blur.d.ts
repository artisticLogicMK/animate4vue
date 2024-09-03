import { Options } from '../utils/types';
declare const blurIn: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const blurOut: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { blurIn, blurOut };
