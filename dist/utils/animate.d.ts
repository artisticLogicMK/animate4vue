import { Options, ExcludedOptionsKeys } from './types';
declare const animate: (direction: string, target: any, done: (() => void), options?: Options, properties?: Record<ExcludedOptionsKeys, any>) => Promise<void>;
export default animate;
