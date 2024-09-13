/**
 * Handles custom animations for entering and leaving a target element.
 *
 * @param {HTMLElement | any} target - The element or target to apply the animation to.
 * @param {() => void} done - A callback function to be called when the animation is complete.
 * @param {"enter" | "leave"} direction - Specifies whether the animation is for entering or leaving.
 * @param {object} config - Configuration object containing animation properties.
 * @returns {Promise<void>} - A promise that resolves when the animation is complete.
 */
import { gsap } from 'gsap';
var customAnimation = function (target, done, direction, config) {
    return new Promise(function (resolve, reject) {
        try {
            // Initialize timeline animation of element
            var timeline = gsap.timeline();
            // Perform the animation based on the direction 'enter' or 'leave'
            if (direction === 'enter') { // Animation to enter
                // Animate from the target state to the default state (e.g. fade in)
                timeline.from(target, config);
                timeline.to(target, { onComplete: function () {
                        done(); // Let vue know animation is complete
                        resolve(); // Resolve promise
                    }
                });
            }
            else {
                // Animate from the default state to the target state (e.g. fade in)
                timeline.to(target, config);
                timeline.to(target, {
                    onStart: function () { return done(); }, // Let vue know animation is complete
                    onComplete: function () { return resolve(); } // Resolve promise
                });
            }
        }
        catch (error) {
            reject('Animate.vue: ' + error);
        }
    });
};
export default customAnimation;
