import { Options } from '../utils/types';
declare const vanishIn: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const vanishOut: (target: any, done: (() => void), options: Options) => Promise<void>;
export { vanishIn, vanishOut };
