import { Options } from '../utils/types';
declare const textIn: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const textOut: (target: any, done: (() => void), options: Options) => Promise<void>;
export { textIn, textOut };
