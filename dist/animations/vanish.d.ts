import { Options } from '../utils/types';
declare const vanishIn: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const vanishOut: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { vanishIn, vanishOut };
