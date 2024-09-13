import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
import animationIsRunning from '../../utils/animationIsRunning';
export function tada(element, options) {
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
            { scaleX: 1, scaleY: 1, rotationZ: 0, duration: 0.2 },
            { scaleX: 0.9, scaleY: 0.9, rotationZ: -3, duration: 0.2 },
            { scaleX: 1.1, scaleY: 1.1, rotationZ: 3, duration: 0.2 },
            { scaleX: 1.1, scaleY: 1.1, rotationZ: -3, duration: 0.2 },
            { scaleX: 1.1, scaleY: 1.1, rotationZ: 3, duration: 0.2 },
            { scaleX: 1.1, scaleY: 1.1, rotationZ: -3, duration: 0.2 },
            { scaleX: 1, scaleY: 1, rotationZ: 0, duration: 0.2 }
        ],
        transformOrigin: 'center center',
        ease: "power1.inOut",
        repeat: options.loop ? -1 : 0,
        repeatDelay: options.delay ? options.delay : 0.111,
        duration: options.duration ? options.duration : 1.4,
        yolo: true
    });
}
