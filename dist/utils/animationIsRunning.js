import './globalTypes';
var animationIsRunning = function (element) {
    if (window.attAnimation && window.attAnimation === element) {
        // If the current element is already animating
        return true;
    }
    else {
        // Mark the element as currently animating by storing it in a global variable
        window.attAnimation = element;
        return false;
    }
};
export default animationIsRunning;
