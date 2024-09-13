export {}

// Extend the Window interface to include your custom property
declare global {
  interface Window {
    attAnimation: HTMLElement | any | undefined; // The element being animated
  }
}