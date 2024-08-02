import gsap from 'gsap';
var ConstructAnimation = /** @class */ (function () {
    function ConstructAnimation(element, options) {
        this.element = element;
        this.options = options;
        this.animation = gsap.to(element, options);
    }
    ConstructAnimation.prototype.kill = function () {
        // Ensure the animation exists before calling kill
        if (this.animation) {
            this.animation.kill();
            // Clear properties set by GSAP to revert element to its initial state
            gsap.set(this.element, { clearProps: "all" });
        }
        return this; // Return `this` for chaining
    };
    return ConstructAnimation;
}());
export default ConstructAnimation;
