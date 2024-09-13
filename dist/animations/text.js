import { __assign } from "tslib";
import animate from '../utils/animate';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);
var textOptions = {
    opacity: 1,
    text: '',
};
// entrance animations
var textIn = function (target, done, options) {
    return animate('in', target, done, options, __assign(__assign({}, textOptions), { duration: (options === null || options === void 0 ? void 0 : options.duration) || parseFloat(target.dataset.avDuration) || 1 }));
};
// leaving animations
var textOut = function (target, done, options) {
    return animate('out', target, done, options, __assign(__assign({}, textOptions), { duration: (options === null || options === void 0 ? void 0 : options.duration) || parseFloat(target.dataset.avDuration) || 1 }));
};
export { textIn, textOut };
