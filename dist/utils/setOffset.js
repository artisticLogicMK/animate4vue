var setOffset = function (target, options) {
    var offsetValue = options && options.offset || target.dataset.avOffset;
    if (offsetValue && offsetValue.includes('-')) {
        return false;
    }
    else {
        return offsetValue || false;
    }
};
export default setOffset;
