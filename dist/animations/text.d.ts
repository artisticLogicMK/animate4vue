import { Options } from '../utils/types';
declare const textIn: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const textOut: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { textIn, textOut };
