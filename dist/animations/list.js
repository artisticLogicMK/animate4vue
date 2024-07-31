import animate from '../utils/animate';
// List animations
var verticalOptions = { height: 0, scale: 0.2, overflowY: 'hidden', ease: "none" };
var horizontalOptions = { width: 0, scale: 0.2, overflowX: 'hidden', ease: "none" };
var listInVertical = function (target, done, options) {
    return animate('in', target, done, options, verticalOptions);
};
var listOutVertical = function (target, done, options) {
    return animate('out', target, done, options, verticalOptions);
};
var listInHorizontal = function (target, done, options) {
    return animate('in', target, done, options, horizontalOptions);
};
var listOutHorizontal = function (target, done, options) {
    return animate('out', target, done, options, horizontalOptions);
};
export { listInVertical, listOutVertical, listInHorizontal, listOutHorizontal };
