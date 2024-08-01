import animate from '../utils/animate';
var puffOptions = {
    scale: 2,
    filter: "blur(2px)",
    transformOrigin: "50% 50%"
};
var puffIn = function (target, done, options) {
    return animate('in', target, done, options, puffOptions);
};
var puffOut = function (target, done, options) {
    return animate('out', target, done, options, puffOptions);
};
export { puffIn, puffOut };
