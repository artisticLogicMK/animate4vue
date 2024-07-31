import animate from '../utils/animate';
import setOffset from '../utils/setOffset';
// entrance animations
var slideInRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        x: offset ? "".concat(offset) : 100
    });
};
var slideInLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        x: offset ? "-".concat(offset) : -100
    });
};
var slideInTop = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        y: offset ? "-".concat(offset) : -100
    });
};
var slideInBottom = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        y: offset ? "".concat(offset) : 100
    });
};
var slideInTopRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        y: offset ? "-".concat(offset) : -100,
        x: offset ? "".concat(offset) : 100
    });
};
var slideInTopLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        y: offset ? "-".concat(offset) : -100,
        x: offset ? "-".concat(offset) : -100
    });
};
var slideInBottomRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        y: offset ? "".concat(offset) : 100,
        x: offset ? "".concat(offset) : 100
    });
};
var slideInBottomLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        y: offset ? "".concat(offset) : 100,
        x: offset ? "-".concat(offset) : -100
    });
};
// leaving animations
var slideOutRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        x: offset ? "".concat(offset) : 100
    });
};
var slideOutLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        x: offset ? "-".concat(offset) : -100
    });
};
var slideOutTop = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        y: offset ? "-".concat(offset) : -100
    });
};
var slideOutBottom = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        y: offset ? "".concat(offset) : 100
    });
};
var slideOutTopRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        y: offset ? "-".concat(offset) : -100,
        x: offset ? "".concat(offset) : 100
    });
};
var slideOutTopLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        y: offset ? "-".concat(offset) : -100,
        x: offset ? "-".concat(offset) : -100
    });
};
var slideOutBottomRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        y: offset ? "".concat(offset) : 100,
        x: offset ? "".concat(offset) : 100
    });
};
var slideOutBottomLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        y: offset ? "".concat(offset) : 100,
        x: offset ? "-".concat(offset) : -100
    });
};
export { slideInRight, slideInLeft, slideInTop, slideInBottom, slideInTopRight, slideInTopLeft, slideInBottomRight, slideInBottomLeft, slideOutRight, slideOutLeft, slideOutTop, slideOutBottom, slideOutTopRight, slideOutTopLeft, slideOutBottomRight, slideOutBottomLeft };
