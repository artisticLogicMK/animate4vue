import { __assign } from "tslib";
import gsap from 'gsap'; // Ensure you have GSAP imported and correct types
var CustomAnimation = /** @class */ (function () {
    function CustomAnimation(element, options) {
        this.element = null;
        this.options = null;
        this.initialStyles = {}; // Store initial styles
        this.element = element;
        this.options = options;
        this.animation = gsap.to(element, options);
    }
    CustomAnimation.prototype.kill = function () {
        // Ensure the animation exists before calling kill
        if (this.animation) {
            this.animation.kill();
            // Clear properties set by GSAP to revert element to its initial state
            gsap.set(this.element, { clearProps: "all" });
        }
        return this; // Return `this` for chaining
    };
    return CustomAnimation;
}());
export function jello(element, options) {
    return new CustomAnimation(element, __assign({ duration: 2, keyframes: [
            { skewX: "-12.5deg", skewY: "-12.5deg", ease: "none", duration: 0.222 },
            { skewX: "6.25deg", skewY: "6.25deg", ease: "none", duration: 0.111 },
            { skewX: "-3.125deg", skewY: "-3.125deg", ease: "none", duration: 0.111 },
            { skewX: "1.5625deg", skewY: "1.5625deg", ease: "none", duration: 0.111 },
            { skewX: "-0.78125deg", skewY: "-0.78125deg", ease: "none", duration: 0.111 },
            { skewX: "0.390625deg", skewY: "0.390625deg", ease: "none", duration: 0.111 },
            { skewX: "-0.1953125deg", skewY: "-0.1953125deg", ease: "none", duration: 0.111 }
        ], repeat: -1, repeatDelay: 0.111 }, options));
}
