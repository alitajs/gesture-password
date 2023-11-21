import React from 'react';
import GesturePassword, { px2hd, hd } from '@alitajs/gesture-password';


export interface GesturePasswordProps {
  width: number;
  height: number;
  background?: string;
  lineWidth?: number;
  lineColor?: string;
  lineBackground?: string;
  rowPont?: number;
  colPont?: number;
  onChange?: (values: number[]) => void;
  onCustomizeDraw?: (obj: object) => void;
  hd?: boolean;
}

export default class ReactGesturePassword extends React.Component<GesturePasswordProps, any> {
  canvas: GesturePassword | null = null;
  el: HTMLCanvasElement | null = null;

  constructor(props: GesturePasswordProps) {
    super(props);
    if(props?.hd){
      hd();
    }
  }

  createCanvasInstance(props: GesturePasswordProps) {
    if (this.canvas) {
      this.canvas.updateProps({
        ...props,
        width: px2hd(props.width),
        lineWidth: px2hd(1),
        height: px2hd(props.height)
      });
    } else if (this.el) {
      this.canvas = new GesturePassword({
        ...props,
        el: this.el,
        lineWidth: px2hd(1),
        width: px2hd(props.width),
        height: px2hd(props.height)
      });
    }
  }

  componentDidMount() {
    this.createCanvasInstance(this.props);
  }

  componentDidUpdate(prevProps: GesturePasswordProps) {
    const currPropsKeys = Object.keys(this.props) as (keyof GesturePasswordProps)[];
    if (currPropsKeys.length === Object.keys(prevProps).length) {
      if (!currPropsKeys.some((key) => this.props[key] !== prevProps[key])) {
        return;
      }
    }
    this.createCanvasInstance(this.props);
  }

  componentWillUnmount() {
    if (this.canvas) {
      // 组件销毁
      this.canvas = null;
    }
    this.el = null;
  }

  portalRef = (el: HTMLCanvasElement | null) => {
    this.el = el;
  };

  render() {
    return (
      <canvas
        ref={this.portalRef}
        style={{
          imageRendering: '-webkit-optimize-contrast'
        }}
        width={px2hd(this.props.width)}
        height={px2hd(this.props.height)}
      ></canvas>
    );
  }
}
