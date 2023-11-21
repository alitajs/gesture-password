// @ts-nocheck
// https://github.com/jondavidjohn/hidpi-canvas-polyfill/blob/master/src/HTMLCanvasElement.js
// 增加了缩放，让尺寸保持原样

export function hd(){
    (function(prototype) {
        prototype.getContext = (function(_super) {
            return function(type) {
                var backingStore, ratio,
                    context = _super.call(this, type);
    
                if (type === '2d') {
    
                    backingStore = context.backingStorePixelRatio ||
                                context.webkitBackingStorePixelRatio ||
                                context.mozBackingStorePixelRatio ||
                                context.msBackingStorePixelRatio ||
                                context.oBackingStorePixelRatio ||
                                context.backingStorePixelRatio || 1;
                    ratio = (window.devicePixelRatio || 1) / backingStore;
    
                    if (ratio > 1) {
                        this.style.height = this.height + 'px';
                        this.style.width = this.width + 'px';
                        this.width *= ratio;
                        this.height *= ratio;
                        context.scale(ratio,ratio)
                    }
                }
    
                return context;
            };
        })(prototype.getContext);
    })(HTMLCanvasElement.prototype);
}