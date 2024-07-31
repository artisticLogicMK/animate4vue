import animate from '../utils/animate';
// entrance animations
var fadeIn = function (target, done, options) {
    return animate('in', target, done, options);
};
// leaving animations
var fadeOut = function (target, done, options) {
    return animate('out', target, done, options);
};
export { fadeIn, fadeOut };
