declare class ConstructAnimation {
    private animation;
    private element;
    private options;
    constructor(element: HTMLElement | any, options: object);
    kill(): this;
}
export default ConstructAnimation;
