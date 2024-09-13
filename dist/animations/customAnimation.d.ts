/**
 * Handles custom animations for entering and leaving a target element.
 *
 * @param {HTMLElement | any} target - The element or target to apply the animation to.
 * @param {() => void} done - A callback function to be called when the animation is complete.
 * @param {"enter" | "leave"} direction - Specifies whether the animation is for entering or leaving.
 * @param {object} config - Configuration object containing animation properties.
 * @returns {Promise<void>} - A promise that resolves when the animation is complete.
 */
declare const customAnimation: (target: HTMLElement | any, done: (() => void), direction: "enter" | "leave", config: object) => Promise<void>;
export default customAnimation;
