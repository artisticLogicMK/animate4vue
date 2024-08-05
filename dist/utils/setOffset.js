var setOffset = function (target, options) {
    return options && options.offset || target.dataset.avOffset || false;
};
export default setOffset;
