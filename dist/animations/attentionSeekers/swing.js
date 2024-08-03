import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
export function swing(element, options) {
    options = __assign({}, options);
    // Validate l options object to ensure it contains only allowed properties
    if (!isValidAttOptions(options)) {
        console.error('Options object should only include: duration(number), delay(number), loop(boolean)');
        return;
    }
    return new ConstructAnimation(element, {
        rotation: 15,
        transformOrigin: 'top center',
        keyframes: [
            { rotation: 15, duration: 0.2 },
            { rotation: -10, duration: 0.2 },
            { rotation: 5, duration: 0.2 },
            { rotation: -5, duration: 0.2 },
            { rotation: 0, duration: 0.2 }
        ],
        ease: "power1.inOut",
        repeat: options.loop ? -1 : 0,
        repeatDelay: options.delay ? options.delay : 0.111,
        duration: options.duration ? options.duration : 1.2
    });
}
