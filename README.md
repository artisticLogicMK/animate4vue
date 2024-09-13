
<p align="center">
<img src="https://github.com/artisticLogicMK/animate4vue/blob/master/md_assets/animate4vue.svg" width="230px" style="display:inline-block" />
</p>

---
**Animate4vue** is a library for ready-to-use animations designed for Vue.js applications, featuring over 100 high-performance UI animations crafted with GSAP, offering GPU-accelerated rendering with better performance and efficiency across all devices, as well as callbacks and async handling. Unlike traditional CSS animation libraries that can be tasking and less efficient on low-end devices, Animate4vue make your animations look and feel flawless.

Offers TypeScript support, and tree-shaking, so only the animations you use are bundled, keeping your application lean and fast.

<!--![Downloads](https://img.shields.io/npm/d18m/animate4vue?style=flat&color=%23e94335)-->
![NPM Version](https://img.shields.io/npm/v/animate4vue?style=flat&color=%23cd8b62)
![Minified size (gzip)](https://img.shields.io/bundlejs/size/animate4vue?color=%2312a4a6)
![Language](https://img.shields.io/badge/types-included-blue.svg?style=flat)
![NPM License](https://img.shields.io/npm/l/animate4vue?style=flat&color=%23f9bb0a)
![Vue Support](https://img.shields.io/badge/vue-3%20&%202-1cb884.svg?style=flat)

<details>
  <summary><strong>Why Animate4vue Was Created</strong></summary>

Traditional CSS animations often struggle with performance issues, especially on less powerful devices, due to their heavy reliance on the browser's rendering engine 😟. To overcome these limitations, Animate4vue uses GSAP, a robust JavaScript animation library that provides smooth, GPU-accelerated animations 💨. GSAP's efficiency and power ensure that animations remain fluid and responsive, regardless of device capabilities, making it an ideal choice for modern web applications ✌️. Additionally, JavaScript animations offer greater control, including callbacks and async functionality, enhancing flexibility and precision in your projects 🎯.
</details>
<br>

<details>
  <summary><strong>Features</strong></summary>

- **🎨 100+ Animations:** A diverse set of animations for various UI elements.
- **🚀 GSAP-Powered:** Smooth, GPU-accelerated animations for enhanced performance.
- **📝 TypeScript Support:** Fully typed for better development experience.
- **🌳 Tree-Shaking:** Includes only the animations you use, keeping your bundle size minimal.
- **🔄 Fine-grained Control:** Offer callbacks for animation state, and asynchronous handling.
</details>

---

## Live Demo
### [See all available animations in the demo](https://animate4vue.netlify.app)
---
<br>

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Through direct invocation](#1-through-direct-invocation)
    - [Animate on initial load](#animate-on-initial-load)
    - [Setting Options](#setting-options-direct)
  - [Through function invocation](#2-through-function-invocation)
    - [Setting Options](#setting-options-function)
  - [Animate Multiple Elements](#animate-multiple-elements)
  - [Transition Events](#transition-events)
  - [Asynchronous Support](#asynchronous-support-anim)
- [Options](#options)
  - [Summary](#summary)
  - [Details](#details)
- [Animations](#animations)
- [Attention Seekers](#attention-seekers)
  - [Attention-Seeker Animations](#att-animations)
  - [How to use](#how-to-use)
  - [Setting Options](#setting-options-att)
  - [Attention Options](#attention-options)
  - [Stopping Attention Seekers](#stopping-attention-seekers)
- [Custom Animation](#custom-animation)
  - [API](#api)
  - [Asynchronous Support](#asynchronous-support-custom)
- [Feedback](#feedback)
- [License](#license)

## Installation

You can install Animate4vue via npm or yarn:

```bash
npm install animate4vue
```
or
```bash
yarn add animate4vue
```

## Usage
---
Animate4vue seamlessly integrates with Vue's `<Transition>` and `<TransitionGroup>` components, giving you the flexibility to add animations with ease. There are two primary methods for incorporating animations with these components:
### 1. Through direct invocation
This involves applying animations directly by hooking into the lifecycle events of Transition components. Here’s how you can do it:
```html
<script setup>
import { puffIn, puffOut } from 'animate4vue';
</script>

<template>
  <Transition @enter="puffIn" @leave="puffOut">
    <div v-if="show">....</div>
  </Transition>
</template>
```
![demo3](https://github.com/artisticLogicMK/animate4vue/blob/master/md_assets/demo3.gif)

> **Important**: Elements should be conditionally displayed using v-if for animations to work.

> **Tip**: Make sure there are no animations or CSS transitions applied or conflicting with elements to animate, they might interfere and mess things up. For example, avoid specifying CSS transitions globally.

<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

#### Animate on initial load
To animate elements on initial load, use the `appear` directive to trigger animations without conditional rendering with `v-if`:
```html
<template>
  <Transition appear @enter="zoomInLeft" @leave="zoomOutRight">
    <div>....</div>
  </Transition>
</template>
```

<h4 id="setting-options-direct">Setting Options</h4>
Through 'direct invocation,' you can specify animation options by setting dataset attributes like so:
```html
  <Transition @enter="flipInHorizontalLeft" @leave="zoomOutLeft" data-av-leave-ease="backIn" data-av-offset="100%">
    <div v-if="show">....</div>
  </Transition>
```
![demo4](https://github.com/artisticLogicMK/animate4vue/blob/master/md_assets/demo4.gif)
`data-av-[option property]="..."`
> Options using dataset attributes apply to both @enter and @leave animations except [data-vn-enter-ease](#enterease) and [data-vn-leave-ease](leaveease).

<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>


### 2. Through function invocation.
This method involves handling animations within the `<script>`, offering greater control, such as adding fallbacks and handling `async` operations.
```html
<script setup>
import { zoomIn, zoomOut } from 'animate4vue';

const animateIn = (el, done) => {
  zoomIn(el, done)
}

const animateOut = (el, done) => {
  zoomOut(el, done)
}

// The 'done' argument is used to signal Vue about the animation state and then update the DOM.
</script>

<template>
  <Transition @enter="animateIn" @leave="animateOut">
    <div v-if="show">....</div>
  </Transition>
</template>
```

> **Important**: Always pass the done as a second argument, needed to tell Vue to remove the element out the DOM when animation is finished.

<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

<h4 id="setting-options-function">Setting Options</h4>
When using function invocation, you can pass options as a configuration object to the third parameter of the animation:
```javascript
const animateIn = (el, done) => {
  zoomIn(el, done, {
    duration: 2,
    // Callbacks for animation state
    onStart: doSomething(),
    onComplete: () => alert('Done!)
  })
}
```
> Function invocation also support setting options through dataset attributes in template.

<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

### Animate Multiple Elements
You may use the `<TransitionGroup>` for animating multiple elements as they enter and leave the DOM:
```html
  <TransitionGroup @enter="slideInRight" @leave="slideInLeft">
    <li v-for="item in list" :key="item">....</li>
  </TransitionGroup>
```

### Transition Events
Vue's transition components also provide a range of callback events, giving you finer control over the animation lifecycle. These include events like before-enter, after-enter, enter-cancelled, before-leave, after-leave, and leave-cancelled. Here's an example of how to use these callbacks:
```html
<script setup>
const animationEnded = (el) => {
  console.log('Animation is finished!')
}
</script>

<template>
  <Transition @enter="vanishIn" @after-enter="animationEnded"></Transition>
</template>
```
<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

### Asynchronous Support <a id="asynchronous-support-anim"></a>
All animations return a Promise that resolves when the animation completes, allowing you to handle asynchronous operations using `await` or by chaining `.then()` and `.catch()`:
```javascript
const animateIn = async (el, done) => {
  await zoomIn(el, done)
}

// or

zoomIn(el, done).then(() => console.log('Success'))
.catch((error) => console.log(error))
```
<small>[See all animations](#animations)</small>
<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>



## Options
<small>See: [summary](#summary), [details](#details)</small>

### Summary
| Name                    | Default     | Type   | Usage |
| ----------------------- | :---------: | ------ | ------- |
| [duration](#duration)   | `0.4`  | `number` | `{duration: 2}`, `data-av-duration="2"`` |
| [delay](#delay)   | `0`  | `number` | `{delay: 1}`, `data-av-delay="1"` |
| [fade](#fade)   | `0.1` | `number` | `{fade: 0.5}`, `data-av-fade="1"`` |
| [blur](#blur)   | `0` | `number` | `{blur: 3}`, `data-av-blur="2"`` |
| [ease](#ease)   | `"ease"`  | `string` | `{ease: "linear"}`, `data-av-ease="backOut"` |
| [offset](#offset)   | `"100%"` of element's width  | `string` | `{offset: "150px"}`, `data-av-offset="150px"` |
| [onStart](#onstart)   | `undefined`  | `function` | `{onStart: ()=> action()}` |
| [onComplete](#oncomplete)   | `undefined` | `function` | `{onComplete: ()=> action()}` |
| [data-av-enter-ease](#data-av-enter-ease)   | `"ease"`  | `string` | `data-av-enter-ease="bounceIn"` |
| [data-av-leave-ease](#data-av-leave-ease)  | `"ease"` | `string` | `data-av-leave-ease="elasticIn"` |

<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

### Details

#### duration

- **type:** `number`
- _default:_ `0.4`

> Duration of the animation in seconds. Numbers below 0 denotes milliseconds(e.g 0.3).

#### delay
- **type:** `number`
- _default:_ `0`

> Delay before the animation starts in seconds. Numbers below 0 denotes milliseconds(e.g 0.3).

#### fade
- **type:** `number`
- _default:_ `0.1`

> Indicates the starting opacity (for 'enter' animations) and ending opacity (for 'leaving' animations). Accepts `0` to `1`. e.g. `0.5`

#### blur
- **type:** `number`
- _default:_ `0`

> Applies a blur effect to the animation. The higher the value, the more pronounced the blur.

#### ease
- **type:** `string`
- _default:_ `"linear"`

> Easing effect of the animation.

<details>
  <summary>See values</summary>
  
  | Value       | Effect                                                                 |
|-------------|------------------------------------------------------------------------|
| `linear`    | Constant speed throughout the animation.                               |
| `easeIn`    | Starts slowly and accelerates towards the end.                         |
| `easeOut`   | Starts quickly and decelerates towards the end.                        |
| `ease`      | Starts slowly, accelerates, and then decelerates.                      |
| `bounceIn`  | Bounces in from the start, creating a bouncing effect as it enters.    |
| `bounceOut` | Bounces out towards the end, creating a bouncing effect as it exits.   |
| `bounce`    | Combines both `bounceIn` and `bounceOut` effects.                       |
| `backIn`    | Moves in with a slight overshoot and then comes back, creating a "back" effect. |
| `backOut`   | Moves out with a slight overshoot before settling.                      |
| `back`      | Combines both `backIn` and `backOut` effects.                          |
| `elasticIn` | Starts slowly, accelerates, and then returns with a slight elastic effect. |
| `elasticOut`| Starts quickly, decelerates, and then returns with an elastic effect.  |
| `elastic`   | Combines both `elasticIn` and `elasticOut` effects.                    |
</details>

#### offset
- **type:** `string`
- _default:_ `"100%"`

> Defines the initial distance from which the animation should begin/end.
> Only applicable to animations involving movement in right, left, up & down. Like rotateInRight, slideOutBottom.
> Does not allow negative values e.g "-50vh". Will fallback to default (100%).

<details>
  <summary>See values</summary>
  
  | Value       | Description                                               |
|-------------|-----------------------------------------------------------|
| `0`         | Dont move.              |
| `100px`     | Moves the element 100 pixels from/to its initial position. Can be any number. |
| `50%`       | Moves the element 50% of its own width (for `right/left`) or height (for `up/down`). |
| `100vw`     | Moves the element 100% of the viewport width (for `right/left`). |
| `100vh`     | Moves the element 100% of the viewport height (for `up/down`). |
</details>

#### onStart
- **type:** `function`
- _default:_ `undefined`

> Callback function executed when the animation starts.

#### onComplete
- **type:** `function`
- _default:_ `undefined`

> Callback function executed when the animation finishes.

#### data-av-enter-ease
- **type:** `function`
- _default:_ `"ease"`

> Easing effect of the 'enter' animation when setting option through dataset attributes e.g data-av-enter-ease="easeOut". [Easing values](#ease)

#### data-av-leave-ease
- **type:** `function`
- _default:_ `"ease"`

> Easing effect of the 'leave' animation when setting option through dataset attributes e.g data-av-leave-ease="backIn". [Easing values](#ease)

#### Note:
When using both function invocation and dataset options for an animation, remember that function invocation options take precedence. This means only the dataset attributes not covered by the function invocation will be applied. For instance:
```html
<script setup>
import { rollIn, rollOut } from 'animate4vue';

const animateIn = (el, done) => {
  rollIn(el, done, {
    duration: 3,
    ease: "elastic"
  })
}
</script>

<template>
  <Transition @enter="animateIn" @leave="rollOut" data-av-duration="1" data-av-enter-ease="linear" data-av-delay="1">
    <div v-if="show">...</div>
  </Transition>
</template>
```

👆 In this example, only the data-av-delay option from dataset attributes will be applied, as the duration and ease options are specified in the function invocation.
<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>


## Animations
<details>
  <summary>See all animations</summary>

- **Fade animations**
  - fadeIn, fadeOut

- **Slide animations**
  - slideInRight, slideInLeft, slideInTop, slideInBottom, slideInTopRight, slideInTopLeft, slideInBottomRight, slideInBottomLeft, slideOutRight, slideOutLeft, slideOutTop, slideOutBottom, slideOutTopRight, slideOutTopLeft, slideOutBottomRight, slideOutBottomLeft

- **Wrap animations**
  - wrapInVertical, wrapOutVertical, wrapInHorizontal, wrapOutHorizontal

- **Flip animations**
  - flipInHorizontal, flipOutHorizontal, flipInVertical, flipOutVertical, flipInHorizontalRight, flipInHorizontalLeft, flipInHorizontalTop, flipInHorizontalBottom, flipOutHorizontalRight, flipOutHorizontalLeft, flipOutHorizontalTop, flipOutHorizontalBottom, flipInVerticalRight, flipInVerticalLeft, flipInVerticalTop, flipInVerticalBottom, flipOutVerticalRight, flipOutVerticalLeft, flipOutVerticalTop, flipOutVerticalBottom

- **Zoom animations**
  - zoomIn, zoomInRight, zoomInLeft, zoomInTop, zoomInBottom, zoomInTopRight, zoomInTopLeft, zoomInBottomRight, zoomInBottomLeft, zoomOut, zoomOutRight, zoomOutLeft, zoomOutTop, zoomOutBottom, zoomOutTopRight, zoomOutTopLeft, zoomOutBottomRight, zoomOutBottomLeft

- **Rotation animations**
  - rotateIn, rotateInBottomLeft, rotateInBottomRight, rotateInTopLeft, rotateInTopRight, rotateOut, rotateOutBottomLeft, rotateOutBottomRight, rotateOutTopLeft, rotateOutTopRight

- **Skew animations**
  - skewInRight, skewInLeft, skewOutRight, skewOutLeft

- **Roll animations**
  - rollIn, rollOut

- **Puff animations**
  - puffIn, puffOut

- **Vanish animations**
  - vanishIn, vanishOut
  
- **Blur animations**
  - blurIn, blurOut

- **Perspective animations**
  - perspectiveInRight, perspectiveInLeft, perspectiveInTop, perspectiveInBottom, perspectiveOutRight, perspectiveOutLeft, perspectiveOutTop, perspectiveOutBottom

- **Open and Close animations**
  - openTopLeft, openTopRight, openBottomLeft, openBottomRight, closeTopLeft, closeTopRight, closeBottomLeft, closeBottomRight

- **Text animations**
  - textIn, textOut

</details>
<small>More coming...</small>

[View live demo of animations](https://animate4vue.netlify.app)
<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>


## Attention Seekers
Attention seekers are animations designed to grab users' attention, such as a ringing bell icon or shaking elements. These animations enhance user engagement and provide a compelling experience. Animate4vue offers a variety of dynamic attention-seeking animations to fit any scenario.

### Available Attention-Seeker Animations <a id="att-animations"></a>
`puff`, `jello`, `spin`, `bounce`, `pulse`, `flash`, `rubberBand`, `headShake`, `shakeHorizontal`, `shakeVertical`, `swing`, `tada`, `wobble`, `heartBeat`
<small>More coming...</small>

### How To Use:
```html
<script setup>
import { swing } from 'animate4vue';
import { ref } from 'vue';

const el = ref(null)

const ringBell = () => {
  swing(el)
  // You can also use any HTML selector such as '#target' or '.class' etc.
}
</script>

<template>
  <img ref="el" src="bell.png" />
  
  <button @click="ringBell">Ring</button>
</template>
```

![demo1](https://github.com/artisticLogicMK/animate4vue/blob/master/md_assets/demo1.gif)

### <h4 id="setting-options-att">Setting Options</h4>
You can pass options to customize the animation behavior. For example:
```javascript
headShake(el, {
  loop: true,
  durattion: 2,
  delay: 1
})
```

### Attention Options
| Name                    | Default     | Type   |
| ----------------------- | :---------: | ------ |
| loop      | `false`  | `boolean` |
| duration   | `0.5` - `1.5`  | `number` |
| delay   | `0.111`  | `number` |

#### loop

- **type:** `boolean`
- _default:_ `false`

> Indicator wether the animation should repeat or not..

#### duration

- **type:** `number`
- _default:_ defer by animation: `0.5` to `1.5`

> Duration of the animation in seconds. Numbers below 0 denotes milliseconds(e.g 0.3).

#### delay

- **type:** `number`
- _default:_ `0.111`

> Delay before the animation in seconds. Numbers below 0 denotes milliseconds(e.g 0.3). Also specify repeat delay of the animation when is on loop.

<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

### Stopping Attention Seekers
Attention seekers provide a `kill()` method to stop ongoing animations, especially when set to loop. This allows you to halt the animation at any time.

#### Example Usage:
```html
<script setup>
import { rubberBand } from 'animate4vue';
import { ref, onMounted } from 'vue';

let animation = null

const ringBell = () => {
  // Start the rubberBand animation with looping enabled
  animation = swing('#target', { loop: true })
}

const stopRingBell = () => {
  // Stop the currently running animation
  if (animation) animation.kill()
}

// Optionally start animation when the component mounts
onMounted(() => {
  animation = rubberBand('#target', { loop: true })
})
</script>

<template>
  <img id="target" src="bell.png" />
    
  <button @click="ringBell">Ring</button>
  <button @click="stopRingBell">Stop</button>
</template>
```
![demo2](https://github.com/artisticLogicMK/animate4vue/blob/master/md_assets/demo2.gif)
> **Important**: Be cautious when triggering an animation, as it cannot be stopped once initiated if triggered multiple times.

> **Important**: Additionally, a new animation cannot be started on an element that already has an ongoing animation.

> **Tip**: Attention seeker animations also work with Transition component events. For example `@enter="jello"`.

<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

<br>



## Custom Animation
Animate4vue offers a flexible `customAnimation` method, allowing you to define your own animations dynamically.

```html
<script setup>
import { customAnimation } from 'animate4vue';

const animateIn = (el, done) => {
  customAnimation(el, done, "enter", {
    duration: 2,
    keyframes: [
      { scaleX: 1, scaleY: 1, duration: 0.1 },
      { scaleX: 1.25, scaleY: 0.75, duration: 0.1 }
    ],
    ease: "power1.inOut"
  })
}
</script>

<template>
  <Transition @enter="animateIn">
    ...
  </Transition>
</template>
```
<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

### API
```customAnimation(element, done, direction, config)```

**Parameters:**
- **element**
  - The DOM element to animate.
- **done**
  - Callback required by Vue to signal that the animation is complete and the element can be removed from the DOM.
- **direction**
  - Specifies whether the animation is for entering or leaving.
  - **Values:**
    - `"enter"`: For animations when the element is entering.
    - `"leave"`: For animations when the element is leaving.
- **config**
  - Configuration object for the animation. Accepts any GSAP properties, if you're familiar with GSAP then fire on!

> Keep in mind that the animation properties defined for 'enter' dictate how the element appears when it enters, while those specified for 'leave' determine how it disappears.

<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>

### Asynchronous Support <a id="asynchronous-support-custom"></a>
The `customAnimation()` method returns a Promise that resolves when the animation is complete, allowing you to use `await` or chain `.then()` and `.catch()` for asynchronous operations:
```javascript
const animateIn = async (el, done) => {
  await customAnimation(el, done, "enter", {
    // animation configuration
  });
}

// or

customAnimation(el, done, "leave", {
  // animation configuration
}).then(() => console.log('Animation Complete'))
.catch((error) => console.log('Animation Error:', error));
```
<p align="right"><small><a href="#table-of-contents"><u>&uarr; Table of Contents</u></a></small></p>


## Feedback
If you have feature requests, encounter any issues or bugs, or have suggestions for improving the code, please open an issue on the [GitHub repository](https://github.com/artisticLogicMK/animate4vue/).

## License
This project is distributed under the [MIT License](https://github.com/artisticLogicMK/animate4vue/blob/master/LICENSE).
