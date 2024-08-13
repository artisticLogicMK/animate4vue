import animate from '../utils/animate';
import setOffset from '../utils/setOffset';
// entrance animations
var skewInRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        skewX: 30,
        ease: 'back.out',
        x: offset ? "".concat(offset) : '100%'
    });
};
var skewInLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, {
        skewX: -30,
        ease: 'back.out',
        x: offset ? "-".concat(offset) : '-100%'
    });
};
// leaving animations
var skewOutRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        skewX: 30,
        ease: 'back.out',
        x: offset ? "".concat(offset) : '100%'
    });
};
var skewOutLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, {
        skewX: -30,
        ease: 'back.out',
        x: offset ? "-".concat(offset) : '-100%'
    });
};
export { skewInRight, skewInLeft, skewOutRight, skewOutLeft };
