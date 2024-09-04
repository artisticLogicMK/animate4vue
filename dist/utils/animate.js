import { __assign } from "tslib";
import { gsap } from 'gsap';
import { isValidOptions } from './runtimeChecks';
// Function to perform animations with GSAP
var animate = function (direction, target, done, options, properties) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        try {
            // Default animation settings
            var defOptions = {
                duration: 0.5, // Duration of the animation in seconds
                opacity: 0.1, // Initial opacity value
                delay: 0, // Start the animation immediatey by default
                ease: "power1.inOut", // Easing Function
                filter: "blur(0px)" // blur effect
            };
            // Assign element dataset here
            var data = target.dataset;
            // Check if there are any dataset attributes present on the target element
            if (Object.keys(data).length > 0) {
                // Create an options object with values from the dataset or fallback to default values if not present
                // These are properties that must be passed as numbers to gsap
                var optionsData = {
                    duration: parseFloat(data.avDuration) || defOptions.duration,
                    delay: parseFloat(data.avDelay) || defOptions.delay
                };
                // Update the 'options' variable with the newly created options object
                options = __assign(__assign({}, optionsData), options);
            }
            // Validate the options object to ensure it contains only allowed properties, if not stop
            if (!isValidOptions(options)) {
                console.error('Options object should only include: duration(number), fade(number), delay(number), ease(string), offset(string), onStart(func), and onComplete(func)');
                return;
            }
            // Define value for fade effect
            var fadeOption = options.fade || data.avFade;
            // Define value for blur effect
            var blurOption = "blur(".concat(options.blur || data.avBlur, "px)");
            // This func maps a custom easing name to a GSAP easing value.
            var setEase = function (selectedEase) {
                // Define a mapping from custom easing names to GSAP easing values
                var easings = {
                    linear: "none",
                    ease: "power1.inOut",
                    easeIn: "power1.in",
                    easeOut: "power1.out",
                    bounce: "bounce.inOut",
                    bounceIn: "bounce.in",
                    bounceOut: "bounce.out",
                    back: "back.inOut",
                    backIn: "back.in",
                    backOut: "back.out",
                    elastic: "elastic.inOut",
                    elasticIn: "elastic.in",
                    elasticOut: "elastic.out"
                };
                // If no easing option is specified, default to 'ease'
                if (selectedEase === undefined) {
                    return easings.ease;
                }
                // If specifid easing exists represent with actual gsap value then return
                if (selectedEase in easings) {
                    return easings[selectedEase];
                }
                else {
                    // Log an error if the easing option is invalid and return the default 'ease' value
                    console.error("Animate4vue: Invalid ease:".concat(selectedEase, ". Accepts: ").concat(Object.keys(easings).join(', ')));
                    return easings.ease;
                }
            };
            // Merge default options with provided options and additional properties
            var allProperties = __assign(__assign(__assign(__assign({}, defOptions), options), { opacity: parseFloat(fadeOption) || defOptions.opacity, filter: blurOption }), properties);
            // Remove properties not needed
            delete allProperties.fade;
            delete allProperties.blur;
            // Initialize timeline animation of element
            var timeline = gsap.timeline();
            // Perform the animation based on the direction ('in(enter)' or 'out(leave')
            if (direction === 'in') { // Animation to enter
                // Animate from the target state to the default state (e.g. fade in)
                timeline.from(target, __assign(__assign({}, allProperties), { ease: (options.ease && setEase(options.ease)) || setEase(data.avEnterEase) || setEase(data.avEase) || (properties === null || properties === void 0 ? void 0 : properties.ease) }))
                    .to(target, { onComplete: function () {
                        done(); // Let vue know animation is complete
                        resolve(); // Resolve promise
                    }
                });
            }
            else { // animation to leave
                // Animate to the end state (e.g., fade out)
                timeline.to(target, __assign(__assign({}, allProperties), { ease: (options.ease && setEase(options.ease)) || setEase(data.avLeaveEase) || setEase(data.avEase) || (properties === null || properties === void 0 ? void 0 : properties.ease) }))
                    .to(target, {
                    onStart: function () { return done(); }, // Let vue know animation is complete
                    onComplete: function () { return resolve(); } // Resolve promise
                });
            }
        }
        catch (err) {
            reject('Animate4vue: ' + err);
        }
    });
};
export default animate;
