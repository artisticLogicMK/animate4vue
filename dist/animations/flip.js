import animate from '../utils/animate';
import setOffset from '../utils/setOffset';
var flip = function (direction) {
    var _a;
    direction = direction === "horizontal" ? "rotationY" : "rotationX";
    return _a = {
            perspective: 400
        },
        _a[direction] = 180,
        _a;
};
var flipInHorizontal = function (target, done, options) {
    return animate('in', target, done, options, flip('horizontal'));
};
var flipOutHorizontal = function (target, done, options) {
    return animate('out', target, done, options, flip('horizontal'));
};
var flipInVertical = function (target, done, options) {
    return animate('in', target, done, options, flip('vertical'));
};
var flipOutVertical = function (target, done, options) {
    return animate('out', target, done, options, flip('vertical'));
};
var flipInHorizontalRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, Object.assign(flip('horizontal'), { x: offset ? "".concat(offset) : '100%' }));
};
var flipInHorizontalLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, Object.assign(flip('horizontal'), { x: offset ? "-".concat(offset) : '-100%' }));
};
var flipInHorizontalTop = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, Object.assign(flip('horizontal'), { y: offset ? "-".concat(offset) : '-100%' }));
};
var flipInHorizontalBottom = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, Object.assign(flip('horizontal'), { y: offset ? "".concat(offset) : '100%' }));
};
var flipOutHorizontalRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, Object.assign(flip('horizontal'), { x: offset ? "".concat(offset) : '100%' }));
};
var flipOutHorizontalLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, Object.assign(flip('horizontal'), { x: offset ? "-".concat(offset) : '-100%' }));
};
var flipOutHorizontalTop = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, Object.assign(flip('horizontal'), { y: offset ? "-".concat(offset) : '-100%' }));
};
var flipOutHorizontalBottom = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, Object.assign(flip('horizontal'), { y: offset ? "".concat(offset) : '100%' }));
};
// flip verticals
var flipInVerticalRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, Object.assign(flip('vertical'), { x: offset ? "-".concat(offset) : '100%' }));
};
var flipInVerticalLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, Object.assign(flip('vertical'), { x: offset ? "-".concat(offset) : '-100%' }));
};
var flipInVerticalTop = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, Object.assign(flip('vertical'), { y: offset ? "-".concat(offset) : '-100%' }));
};
var flipInVerticalBottom = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('in', target, done, options, Object.assign(flip('vertical'), { y: offset ? "".concat(offset) : '100%' }));
};
var flipOutVerticalRight = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, Object.assign(flip('vertical'), { x: offset ? "".concat(offset) : '100%' }));
};
var flipOutVerticalLeft = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, Object.assign(flip('vertical'), { x: offset ? "-".concat(offset) : '-100%' }));
};
var flipOutVerticalTop = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, Object.assign(flip('vertical'), { y: offset ? "-".concat(offset) : '-100%' }));
};
var flipOutVerticalBottom = function (target, done, options) {
    var offset = setOffset(target, options);
    return animate('out', target, done, options, Object.assign(flip('vertical'), { y: offset ? "".concat(offset) : '100%' }));
};
export { flipInHorizontal, flipOutHorizontal, flipInVertical, flipOutVertical, flipInHorizontalRight, flipInHorizontalLeft, flipInHorizontalTop, flipInHorizontalBottom, flipOutHorizontalRight, flipOutHorizontalLeft, flipOutHorizontalTop, flipOutHorizontalBottom, flipInVerticalRight, flipInVerticalLeft, flipInVerticalTop, flipInVerticalBottom, flipOutVerticalRight, flipOutVerticalLeft, flipOutVerticalTop, flipOutVerticalBottom };
