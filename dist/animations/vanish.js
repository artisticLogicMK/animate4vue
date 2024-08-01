import { __assign } from "tslib";
import animate from '../utils/animate';
var vanishOptions = {
    scale: 2,
    filter: "blur(90px)",
    transformOrigin: "50% 50%",
    duration: 0.65
};
var vanishIn = function (target, done, options) {
    return animate('in', target, done, options, vanishOptions);
};
var vanishOut = function (target, done, options) {
    return animate('out', target, done, options, __assign(__assign({}, vanishOptions), { filter: "blur(20px)" }));
};
export { vanishIn, vanishOut };
