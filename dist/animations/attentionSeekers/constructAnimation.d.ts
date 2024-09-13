import '../../utils/globalTypes';
declare class ConstructAnimation {
    private animation;
    private element;
    private options;
    constructor(element: HTMLElement | any, options: Record<string, any>);
    kill(): this;
}
export default ConstructAnimation;
