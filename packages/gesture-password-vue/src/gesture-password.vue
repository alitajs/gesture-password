<template>
  <canvas ref="canvasRef" :width="px2hdWidth" :height="px2hdWidth"></canvas>
</template>

<script>
import GesturePassword, { px2hd, hd } from '@alitajs/gesture-password';

export default {
  name: 'GesturePassword',
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    background: String,
    lineColor: String,
    lineBackground: String,
    rowPont: Number,
    colPont: Number,
    hd: Boolean
  },
  data() {
    return {
      canvas: null,
      el: null
    };
  },
  computed: {
    px2hdHeight: function() {
      return px2hd(this.height);
    },
    px2hdWidth: function() {
      return px2hd(this.width);
    }
  },
  mounted() {
    this.portalRef();
    this.createCanvasInstance(this.$props);
  },
  updated() {
    this.createCanvasInstance(this.$props);
  },
  beforeDestroy() {
    if (this.canvas) {
      // 组件销毁
      this.canvas = null;
    }
    this.el = null;
  },
  methods: {
    createCanvasInstance(props) {
      if(props?.hd){
        hd();
      }
      if (!this.canvas) {
        const mergeProps = {
          ...props,
          width: px2hd(props.width),
          height: px2hd(props.height),
          onChange: this.$listeners ? this.$listeners.onChange : this.$attrs.onOnChange,
          onCustomizeDraw: this.$listeners ? this.$listeners.onCustomizeDraw : this.$attrs.onOnCustomizeDraw
        };
        this.canvas = new GesturePassword({ ...mergeProps, el: this.el });
      }
    },
    portalRef() {
      if (!this.el) {
        this.el = this.$refs.canvasRef;
      }
    }
  }
};
</script>
