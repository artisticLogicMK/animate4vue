import { __assign } from "tslib";
import animate from '../utils/animate';
var openOptions = {
    ease: "power.inOut"
};
// entrance animations
var openTopRight = function (target, done, options) {
    return animate('in', target, done, options, __assign(__assign({}, openOptions), { transformOrigin: "top right", rotation: -110 }));
};
var openTopLeft = function (target, done, options) {
    return animate('in', target, done, options, __assign(__assign({}, openOptions), { transformOrigin: "top left", rotation: 110 }));
};
var openBottomRight = function (target, done, options) {
    return animate('in', target, done, options, __assign(__assign({}, openOptions), { transformOrigin: "bottom right", rotation: 110 }));
};
var openBottomLeft = function (target, done, options) {
    return animate('in', target, done, options, __assign(__assign({}, openOptions), { transformOrigin: "bottom left", rotation: -110 }));
};
// Leaving animations
var closeTopRight = function (target, done, options) {
    return animate('out', target, done, options, __assign(__assign({}, openOptions), { transformOrigin: "top right", rotation: -110 }));
};
var closeTopLeft = function (target, done, options) {
    return animate('out', target, done, options, __assign(__assign({}, openOptions), { transformOrigin: "top left", rotation: 110 }));
};
var closeBottomRight = function (target, done, options) {
    return animate('out', target, done, options, __assign(__assign({}, openOptions), { transformOrigin: "bottom right", rotation: -110 }));
};
var closeBottomLeft = function (target, done, options) {
    return animate('out', target, done, options, __assign(__assign({}, openOptions), { transformOrigin: "bottom left", rotation: 110 }));
};
export { openTopLeft, openTopRight, openBottomLeft, openBottomRight, closeTopLeft, closeTopRight, closeBottomLeft, closeBottomRight };
