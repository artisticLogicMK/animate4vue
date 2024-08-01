import animate from '../utils/animate';
var rightOptions = {
    transformOrigin: "100% 0",
    perspective: "800px",
    rotationY: 180
};
var leftOptions = {
    transformOrigin: "0 0",
    perspective: "800px",
    rotationY: -180
};
var topOptions = {
    transformOrigin: "0 100%",
    perspective: "800px",
    rotationX: 180
};
var bottomOptions = {
    transformOrigin: "0 0",
    perspective: "800px",
    rotationX: -180
};
// entrance animations
var perspectiveInRight = function (target, done, options) {
    return animate('in', target, done, options, rightOptions);
};
var perspectiveInLeft = function (target, done, options) {
    return animate('in', target, done, options, leftOptions);
};
var perspectiveInTop = function (target, done, options) {
    return animate('in', target, done, options, topOptions);
};
var perspectiveInBottom = function (target, done, options) {
    return animate('in', target, done, options, bottomOptions);
};
// leaving animations
var perspectiveOutRight = function (target, done, options) {
    return animate('out', target, done, options, rightOptions);
};
var perspectiveOutLeft = function (target, done, options) {
    return animate('out', target, done, options, leftOptions);
};
var perspectiveOutTop = function (target, done, options) {
    return animate('out', target, done, options, topOptions);
};
var perspectiveOutBottom = function (target, done, options) {
    return animate('out', target, done, options, bottomOptions);
};
export { perspectiveInRight, perspectiveInLeft, perspectiveInTop, perspectiveInBottom, perspectiveOutRight, perspectiveOutLeft, perspectiveOutTop, perspectiveOutBottom };
