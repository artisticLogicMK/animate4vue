import { Options } from '../utils/types';
declare const wrapInVertical: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const wrapOutVertical: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const wrapInHorizontal: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const wrapOutHorizontal: (target: any, done: (() => void), options: Options) => Promise<void>;
export { wrapInVertical, wrapOutVertical, wrapInHorizontal, wrapOutHorizontal };
