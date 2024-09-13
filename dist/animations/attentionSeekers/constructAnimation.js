import { __assign } from "tslib";
import gsap from 'gsap';
import '../../utils/globalTypes';
var ConstructAnimation = /** @class */ (function () {
    function ConstructAnimation(element, options) {
        var _this = this;
        this.element = element;
        this.options = options;
        this.animation = gsap.to(element, __assign(__assign({}, options), { onComplete: function () {
                // If animation is set to perform once,
                // Run kill method to clear animation
                if (options.repeat === 0)
                    _this.kill();
            } }));
    }
    ConstructAnimation.prototype.kill = function () {
        // Ensure the animation exists before calling kill
        if (this.animation) {
            this.animation.kill();
            // Clear properties set by GSAP to revert element to its initial state
            gsap.set(this.element, { clearProps: "all" });
            // Clear the global animation state when the animation is finished 
            window.attAnimation = undefined;
        }
        return this; // Return `this` for chaining
    };
    return ConstructAnimation;
}());
export default ConstructAnimation;
