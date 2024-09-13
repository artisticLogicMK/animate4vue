import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
import animationIsRunning from '../../utils/animationIsRunning';
export function shakeVertical(element, options) {
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
        keyframes: [
            { y: 0, duration: 0.1 }, // 0%
            { y: -10, duration: 0.1 }, // 10%
            { y: 10, duration: 0.1 }, // 20%
            { y: -10, duration: 0.1 }, // 30%
            { y: 10, duration: 0.1 }, // 40%
            { y: -10, duration: 0.1 }, // 50%
            { y: 10, duration: 0.1 }, // 60%
            { y: -10, duration: 0.1 }, // 70%
            { y: 10, duration: 0.1 }, // 80%
            { y: -10, duration: 0.1 }, // 90%
            { y: 0, duration: 0.1 } // 100%
        ],
        ease: "power1.inOut",
        repeat: options.loop ? -1 : 0,
        repeatDelay: options.delay ? options.delay : 0.111,
        duration: options.duration ? options.duration : 2,
        yolo: true
    });
}
