import { Options } from '../utils/types';
declare const puffIn: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const puffOut: (target: any, done: (() => void), options: Options) => Promise<void>;
export { puffIn, puffOut };
