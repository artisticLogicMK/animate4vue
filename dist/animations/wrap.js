import animate from '../utils/animate';
// List animations
var verticalOptions = { height: 0, opacity: 1, overflowY: 'hidden' };
var horizontalOptions = { width: 0, opacity: 1, overflowX: 'hidden' };
var wrapInVertical = function (target, done, options) {
    return animate('in', target, done, options, verticalOptions);
};
var wrapOutVertical = function (target, done, options) {
    return animate('out', target, done, options, verticalOptions);
};
var wrapInHorizontal = function (target, done, options) {
    return animate('in', target, done, options, horizontalOptions);
};
var wrapOutHorizontal = function (target, done, options) {
    return animate('out', target, done, options, horizontalOptions);
};
export { wrapInVertical, wrapOutVertical, wrapInHorizontal, wrapOutHorizontal };
