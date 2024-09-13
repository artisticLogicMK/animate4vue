import { __assign } from "tslib";
import animate from '../utils/animate';
var vanishOptions = {
    scale: 2,
    filter: "blur(90px)",
    transformOrigin: "50% 50%",
};
var vanishIn = function (target, done, options) {
    return animate('in', target, done, options, __assign(__assign({}, vanishOptions), { duration: (options === null || options === void 0 ? void 0 : options.duration) || parseFloat(target.dataset.avDuration) || 0.65 }));
};
var vanishOut = function (target, done, options) {
    return animate('out', target, done, options, __assign(__assign({}, vanishOptions), { duration: (options === null || options === void 0 ? void 0 : options.duration) || parseFloat(target.dataset.avDuration) || 0.65 }));
};
export { vanishIn, vanishOut };
