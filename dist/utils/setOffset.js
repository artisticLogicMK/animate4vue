var setOffset = function (target, options) {
    return options && options.offset || target.dataset.vnOffset || false;
};
export default setOffset;
