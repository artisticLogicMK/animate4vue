import { Options } from '../utils/types';
declare const skewInRight: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const skewInLeft: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const skewOutRight: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const skewOutLeft: (target: any, done: (() => void), options: Options) => Promise<void>;
export { skewInRight, skewInLeft, skewOutRight, skewOutLeft };
