import { fadeIn, fadeOut } from './animations/fade'
import { slideInRight, slideInLeft, slideInTop, slideInBottom, slideInTopRight, slideInTopLeft, slideInBottomRight, slideInBottomLeft, slideOutRight, slideOutLeft, slideOutTop, slideOutBottom, slideOutTopRight, slideOutTopLeft, slideOutBottomRight, slideOutBottomLeft } from './animations/slide'
import { wrapInVertical, wrapOutVertical, wrapInHorizontal, wrapOutHorizontal } from './animations/wrap'
import { flipInHorizontal, flipOutHorizontal, flipInVertical, flipOutVertical, flipInHorizontalRight, flipInHorizontalLeft, flipInHorizontalTop, flipInHorizontalBottom, flipOutHorizontalRight, flipOutHorizontalLeft, flipOutHorizontalTop, flipOutHorizontalBottom, flipInVerticalRight, flipInVerticalLeft, flipInVerticalTop, flipInVerticalBottom, flipOutVerticalRight, flipOutVerticalLeft, flipOutVerticalTop, flipOutVerticalBottom } from './animations/flip'
import { zoomIn, zoomInRight, zoomInLeft, zoomInTop, zoomInBottom, zoomInTopRight, zoomInTopLeft, zoomInBottomRight, zoomInBottomLeft, zoomOut, zoomOutRight, zoomOutLeft, zoomOutTop, zoomOutBottom, zoomOutTopRight, zoomOutTopLeft, zoomOutBottomRight, zoomOutBottomLeft } from './animations/zoom'
import { rotateIn, rotateInBottomLeft, rotateInBottomRight, rotateInTopLeft, rotateInTopRight, rotateOut, rotateOutBottomLeft, rotateOutBottomRight, rotateOutTopLeft, rotateOutTopRight } from './animations/rotate'
import { skewInRight, skewInLeft, skewOutRight, skewOutLeft } from './animations/skew'
import { rollIn, rollOut } from './animations/roll'
import { puffIn, puffOut } from './animations/puff'
import { blurIn, blurOut } from './animations/blur'
import { vanishIn, vanishOut } from './animations/vanish'
import { perspectiveInRight, perspectiveInLeft, perspectiveInTop, perspectiveInBottom, perspectiveOutRight, perspectiveOutLeft, perspectiveOutTop, perspectiveOutBottom } from './animations/perspective'
import { openTopLeft, openTopRight, openBottomLeft, openBottomRight, closeTopLeft, closeTopRight, closeBottomLeft, closeBottomRight } from './animations/openClose'
import { textIn, textOut } from './animations/text'
import customAnimation from './animations/customAnimation'

// Attention seekers
import { jello } from './animations/attentionSeekers/jello'
import { bounce } from './animations/attentionSeekers/bounce'
import { pulse } from './animations/attentionSeekers/pulse'
import { flash } from './animations/attentionSeekers/flash'
import { headShake } from './animations/attentionSeekers/headShake'
import { rubberBand } from './animations/attentionSeekers/rubberBand'
import { shakeHorizontal } from './animations/attentionSeekers/shakeHorizontal'
import { shakeVertical } from './animations/attentionSeekers/shakeVertical'
import { swing } from './animations/attentionSeekers/swing'
import { tada } from './animations/attentionSeekers/tada'
import { wobble } from './animations/attentionSeekers/wobble'
import { heartBeat } from './animations/attentionSeekers/heartBeat'
import { puff } from './animations/attentionSeekers/puff'
import { spin } from './animations/attentionSeekers/spin'

export {
  // Customize
  customAnimation,
  
  // Fade animations
  fadeIn, fadeOut,

  // Slide animations
  slideInRight, slideInLeft, slideInTop, slideInBottom, slideInTopRight, slideInTopLeft, slideInBottomRight, slideInBottomLeft, slideOutRight, slideOutLeft, slideOutTop, slideOutBottom, slideOutTopRight, slideOutTopLeft, slideOutBottomRight, slideOutBottomLeft,
  
  // Wrap animations
  wrapInVertical, wrapOutVertical, wrapInHorizontal, wrapOutHorizontal,
  
  // flip
  flipInHorizontal, flipOutHorizontal, flipInVertical, flipOutVertical, flipInHorizontalRight, flipInHorizontalLeft, flipInHorizontalTop, flipInHorizontalBottom, flipOutHorizontalRight, flipOutHorizontalLeft, flipOutHorizontalTop, flipOutHorizontalBottom, flipInVerticalRight, flipInVerticalLeft, flipInVerticalTop, flipInVerticalBottom, flipOutVerticalRight, flipOutVerticalLeft, flipOutVerticalTop, flipOutVerticalBottom,
  
  // zoom
  zoomIn, zoomInRight, zoomInLeft, zoomInTop, zoomInBottom, zoomInTopRight, zoomInTopLeft, zoomInBottomRight, zoomInBottomLeft, zoomOut, zoomOutRight, zoomOutLeft, zoomOutTop, zoomOutBottom, zoomOutTopRight, zoomOutTopLeft, zoomOutBottomRight, zoomOutBottomLeft,
  
  // Rotations
  rotateIn, rotateInBottomLeft, rotateInBottomRight, rotateInTopLeft, rotateInTopRight, rotateOut, rotateOutBottomLeft, rotateOutBottomRight, rotateOutTopLeft, rotateOutTopRight,
  
  // Skew
  skewInRight, skewInLeft, skewOutRight, skewOutLeft,
  
  // Roll
  rollIn, rollOut,
  
  // Puff
  puffIn, puffOut,
  
  // Blur
  blurIn, blurOut,
  
  // Vanish
  vanishIn, vanishOut,
  
  // Perspective
  perspectiveInRight, perspectiveInLeft, perspectiveInTop, perspectiveInBottom, perspectiveOutRight, perspectiveOutLeft, perspectiveOutTop, perspectiveOutBottom,
  
  // open and close
  openTopLeft, openTopRight, openBottomLeft, openBottomRight, closeTopLeft, closeTopRight, closeBottomLeft, closeBottomRight,
  
  // Texts
  textIn, textOut,
  
  // Attention seekers
  puff, jello, bounce, spin, pulse, flash, rubberBand, headShake, shakeHorizontal, shakeVertical, swing, tada, wobble, heartBeat
}