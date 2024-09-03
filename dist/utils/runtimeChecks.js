// This function checks if the properties specified in Options type are included
export var isValidOptions = function (options) {
    return (options.onStart === undefined || typeof options.onStart === 'function') &&
        (options.onComplete === undefined || typeof options.onComplete === 'function') &&
        (options.duration === undefined || typeof options.duration === 'number') &&
        (options.delay === undefined || typeof options.delay === 'number') &&
        (options.fade === undefined || typeof options.fade === 'string' || typeof options.fade === 'number') &&
        (options.blur === undefined || typeof options.blur === 'string' || typeof options.blur === 'number') &&
        (options.ease === undefined || typeof options.ease === 'string') &&
        (options.offset === undefined || typeof options.offset === 'string');
};
// This function checks if the properties specified in AttentionOptions type are included
export var isValidAttOptions = function (options) {
    return (options.duration === undefined || typeof options.duration === 'number') &&
        (options.delay === undefined || typeof options.delay === 'number') && (options.loop === undefined || typeof options.loop === 'boolean');
};
