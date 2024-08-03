import animate from '../utils/animate';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);
var textOptions = {
    duration: 1,
    opacity: 1,
    text: '',
};
// entrance animations
var textIn = function (target, done, options) {
    return animate('in', target, done, options, textOptions);
};
// leaving animations
var textOut = function (target, done, options) {
    return animate('out', target, done, options, textOptions);
};
export { textIn, textOut };
