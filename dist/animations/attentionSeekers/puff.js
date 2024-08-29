import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
export function puff(element, options) {
    options = __assign({}, options);
    // Validate l options object to ensure it contains only allowed properties
    if (!isValidAttOptions(options)) {
        console.error('Options object should only include: duration(number), delay(number), loop(boolean)');
        return;
    }
    return new ConstructAnimation(element, {
        keyframes: [
            {
                scale: 1.5,
                filter: "blur(2px)",
                transformOrigin: "50% 50%",
                opacity: 0,
            },
            {
                scale: 1,
                filter: "blur(0px)",
                transformOrigin: "none",
                opacity: 1,
            },
        ],
        ease: "power1.inOut",
        repeat: options.loop ? -1 : 0,
        repeatDelay: options.delay ? options.delay : 0.111,
        duration: options.duration ? options.duration : 1.5,
        yolo: true
    });
}
