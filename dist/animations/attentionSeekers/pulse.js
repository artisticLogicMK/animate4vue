import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
export function pulse(element, options) {
    // Validate l options object to ensure it contains only allowed properties
    if (!isValidAttOptions(options)) {
        console.error('Options object should only include: duration(number), delay(number), loop(boolean)');
        return;
    }
    return new ConstructAnimation(element, __assign({ duration: options.duration ? options.duration : 2, scale: 1.05, ease: "power1.inOut", repeat: options.loop ? -1 : 0, repeatDelay: options.delay ? options.delay : 0.111, yoyo: true }, options));
}
