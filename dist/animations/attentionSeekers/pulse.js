import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
import animationIsRunning from '../../utils/animationIsRunning';
export function pulse(element, options) {
    options = __assign({}, options);
    // Validate options object to ensure it contains only allowed properties
    if (!isValidAttOptions(options)) {
        console.error('Options object should only include: duration(number), delay(number), loop(boolean)');
        return;
    }
    // Prevent starting a new animation if the current element is already animating
    if (animationIsRunning(element))
        return; // exit
    return new ConstructAnimation(element, {
        scale: 1.05,
        ease: "power1.inOut",
        repeat: options.loop ? -1 : 0,
        repeatDelay: options.delay ? options.delay : 0.111,
        duration: options.duration ? options.duration : 1.5,
        yolo: true
    });
}
