import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
export function spin(element, options) {
    options = __assign({}, options);
    // Validate l options object to ensure it contains only allowed properties
    if (!isValidAttOptions(options)) {
        console.error('Options object should only include: duration(number), delay(number), loop(boolean)');
        return;
    }
    return new ConstructAnimation(element, {
        rotate: 360,
        ease: "power1.inOut",
        repeat: options.loop ? -1 : 0,
        repeatDelay: options.delay ? options.delay : 0.111,
        duration: options.duration ? options.duration : 1.6,
        yolo: true
    });
}
