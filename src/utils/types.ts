/**
 * Defines configuration options for animations.
 * 
 * @interface Options
 */
export interface Options {
  /** Duration of the animation in seconds. */
  duration?: number;
  /** Delay before the animation starts, in seconds. */
  delay?: number;
  /** Indicator wether the animation should have fade effect or not. */
  fade?: boolean | number;
  /** Easing of the animation. Accepts: linear, easeIn, easeOut, ease, bounceIn, bounceOut, bounce, backIn, backOut, back, elasticIn, elasticOut, elastic */
  ease?: string,
  /**
    * Defines the initial distance from which the animation should begin/end.
    * Only applicable to animations involving movement in right, left, up & down.
  */
  offset?: string,
  /** Callback function executed when the animation starts. */
  onStart?: () => void;
  /** Callback function executed when the animation completes. */
  onComplete?: () => void;
}


/**
 * Type representing keys that are not part of the `Options` interface.
 * Useful for creating types that exclude properties defined in `Options`.
 * 
 * @type ExcludedOptionsKeys
 */
export type ExcludedOptionsKeys = Exclude<keyof any, keyof Options>


/**
 * Defines configuration options for attention seekers.
 * 
 * @interface AttentionOptions
 */
export interface AttentionOptions {
  /** Duration of the animation in seconds. */
  duration?: number;
  /** Delay before the animation starts, in seconds. Also denotes repeat delay if thits on loop. */
  delay?: number;
  /** Indicator wether the animation should repeat or not. */
  loop?: boolean;
}