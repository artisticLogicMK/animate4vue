import animate from '../utils/animate';
var blurOptions = {
    opacity: 0.5,
    filter: "blur(6px)"
};
var blurIn = function (target, done, options) {
    return animate('in', target, done, options, blurOptions);
};
var blurOut = function (target, done, options) {
    return animate('out', target, done, options, blurOptions);
};
export { blurIn, blurOut };
