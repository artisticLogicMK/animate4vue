declare class CustomAnimation {
    private animation;
    private element;
    private options;
    private initialStyles;
    constructor(element: any, options: any);
    kill(): this;
}
export declare function jello(element: any, options: any): CustomAnimation;
export {};
