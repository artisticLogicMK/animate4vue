import animate from '../utils/animate';
// entrance animations
var rotateIn = function (target, done, options) {
    return animate('in', target, done, options, { scale: 0, rotationZ: -200 });
};
var rotateInBottomLeft = function (target, done, options) {
    return animate('in', target, done, options, {
        rotationZ: -45
    });
};
var rotateInBottomRight = function (target, done, options) {
    return animate('in', target, done, options, {
        rotationZ: 45,
    });
};
var rotateInTopLeft = function (target, done, options) {
    return animate('in', target, done, options, {
        rotationZ: 45,
    });
};
var rotateInTopRight = function (target, done, options) {
    return animate('in', target, done, options, {
        rotationZ: -90,
    });
};
// leaving animations
var rotateOut = function (target, done, options) {
    return animate('out', target, done, options, { scale: 0, rotationZ: -200 });
};
var rotateOutBottomLeft = function (target, done, options) {
    return animate('out', target, done, options, {
        rotationZ: -45
    });
};
var rotateOutBottomRight = function (target, done, options) {
    return animate('out', target, done, options, {
        rotationZ: 45
    });
};
var rotateOutTopLeft = function (target, done, options) {
    return animate('out', target, done, options, {
        rotationZ: 45
    });
};
var rotateOutTopRight = function (target, done, options) {
    return animate('out', target, done, options, {
        rotationZ: -90
    });
};
export { rotateIn, rotateInBottomLeft, rotateInBottomRight, rotateInTopLeft, rotateInTopRight, rotateOut, rotateOutBottomLeft, rotateOutBottomRight, rotateOutTopLeft, rotateOutTopRight };
