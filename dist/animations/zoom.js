import animate from '../utils/animate';
import setOffset from '../utils/setOffset';
// entrance animations
var zoomIn = function (target, done, options) {
    return animate('in', target, done, options, { scale: 0 });
};
var zoomInRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        scale: 0,
        x: offset ? "".concat(offset) : 100
    });
};
var zoomInLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        scale: 0,
        x: offset ? "-".concat(offset) : -100
    });
};
var zoomInTop = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        scale: 0,
        y: offset ? "-".concat(offset) : -100
    });
};
var zoomInBottom = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        scale: 0,
        y: offset ? "".concat(offset) : 100
    });
};
var zoomInTopRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        scale: 0,
        y: offset ? "-".concat(offset) : -100,
        x: offset ? "".concat(offset) : 100
    });
};
var zoomInTopLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        scale: 0,
        y: offset ? "-".concat(offset) : -100,
        x: offset ? "-".concat(offset) : -100
    });
};
var zoomInBottomRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        scale: 0,
        y: offset ? "".concat(offset) : 100,
        x: offset ? "".concat(offset) : 100
    });
};
var zoomInBottomLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        scale: 0,
        y: offset ? "".concat(offset) : 100,
        x: offset ? "-".concat(offset) : -100
    });
};
// leaving animations
var zoomOut = function (target, done, options) {
    return animate('out', target, done, options, { scale: 0 });
};
var zoomOutRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        scale: 0,
        x: offset ? "".concat(offset) : 100
    });
};
var zoomOutLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        scale: 0,
        x: offset ? "-".concat(offset) : -100
    });
};
var zoomOutTop = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        scale: 0,
        y: offset ? "-".concat(offset) : -100
    });
};
var zoomOutBottom = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        scale: 0,
        y: offset ? "".concat(offset) : 100
    });
};
var zoomOutTopRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        scale: 0,
        y: offset ? "-".concat(offset) : -100,
        x: offset ? "".concat(offset) : 100
    });
};
var zoomOutTopLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        scale: 0,
        y: offset ? "-".concat(offset) : -100,
        x: offset ? "-".concat(offset) : -100
    });
};
var zoomOutBottomRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        scale: 0,
        y: offset ? "".concat(offset) : 100,
        x: offset ? "".concat(offset) : 100
    });
};
var zoomOutBottomLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        scale: 0,
        y: offset ? "".concat(offset) : 100,
        x: offset ? "-".concat(offset) : -100
    });
};
export { zoomIn, zoomInRight, zoomInLeft, zoomInTop, zoomInBottom, zoomInTopRight, zoomInTopLeft, zoomInBottomRight, zoomInBottomLeft, zoomOut, zoomOutRight, zoomOutLeft, zoomOutTop, zoomOutBottom, zoomOutTopRight, zoomOutTopLeft, zoomOutBottomRight, zoomOutBottomLeft };
