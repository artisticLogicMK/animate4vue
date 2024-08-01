import animate from '../utils/animate';
var rollIn = function (target, done, options) {
    return animate('in', target, done, options, {
        rotationZ: -120,
        transformOrigin: "0% 50%"
    });
};
var rollOut = function (target, done, options) {
    return animate('out', target, done, options, {
        rotationZ: 120,
        transformOrigin: "0% 50%"
    });
};
export { rollIn, rollOut };
