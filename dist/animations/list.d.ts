import { Options } from '../utils/types';
declare const listInVertical: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const listOutVertical: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const listInHorizontal: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const listOutHorizontal: (target: any, done: (() => void), options: Options) => Promise<void>;
export { listInVertical, listOutVertical, listInHorizontal, listOutHorizontal };
