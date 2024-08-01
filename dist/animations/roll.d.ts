import { Options } from '../utils/types';
declare const rollIn: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const rollOut: (target: any, done: (() => void), options: Options) => Promise<void>;
export { rollIn, rollOut };
