import React from 'react';
import GesturePassword, { GesturePasswordProps } from '@alitajs/gesture-password-react';

export default () => {
  const onCustomizeDraw = ({
    context,
    width,
    height,
    background,
    lineColor,
    initCircleCoordinate,
    circleR,
    selectedCoordinate,
    lineBackground
  }: object) => {
      // 清空绘图
      context.clearRect(0, 0, width, height);
      // 绘制背景
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);
      //绘制初始默认小圆点
      context.fillStyle = "#DDDDDD";
      context.beginPath();
      for (let i = 0; i < initCircleCoordinate.length; i++) {
        context.moveTo(
          initCircleCoordinate[i].x + circleR / 2,
          initCircleCoordinate[i].y
        );
        context.arc(
          initCircleCoordinate[i].x,
          initCircleCoordinate[i].y,
          (circleR * 20) / 56,
          0,
          Math.PI * 2,
          true
        );
      }
      context.fill();
      context.closePath();
      // 绘制连线
      context.strokeStyle = lineColor;
      context.beginPath();
      for (let i = 0; i < selectedCoordinate.length; i++) {
        context.lineTo(selectedCoordinate[i].x, selectedCoordinate[i].y);
      }
      context.stroke();
      context.closePath();
      // 绘制被选中的点的背景 #D9EDFF
      context.fillStyle = lineBackground;
      context.beginPath();
      for (let i = 0; i < selectedCoordinate.length; i++) {
        context.moveTo(
          selectedCoordinate[i].x + circleR / 2,
          selectedCoordinate[i].y
        );
        context.arc(
          selectedCoordinate[i].x,
          selectedCoordinate[i].y,
          circleR,
          0,
          Math.PI * 2,
          true
        );
      }
      context.fill();
      context.closePath();
      // 绘制被选中的点的中心圆 大小是圆面积的 20/56
      context.fillStyle = lineColor;
      context.beginPath();
      for (let i = 0; i < selectedCoordinate.length; i++) {
        context.moveTo(
          selectedCoordinate[i].x + circleR / 2,
          selectedCoordinate[i].y
        );
        context.arc(
          selectedCoordinate[i].x,
          selectedCoordinate[i].y,
          (circleR * 20) / 56,
          0,
          Math.PI * 2,
          true
        );
      }
      context.fill();
      context.closePath();
      // 绘制被选中的点的圆圈
      context.lineWidth = 1;
      context.strokeStyle = lineColor;
      context.beginPath();
      for (let i = 0, r = circleR; i < selectedCoordinate.length; i++) {
        context.moveTo(selectedCoordinate[i].x + r, selectedCoordinate[i].y);
        context.arc(
          selectedCoordinate[i].x,
          selectedCoordinate[i].y,
          r,
          0,
          Math.PI * 2,
          true
        );
      }
      context.stroke();
      context.closePath();
  }

  const config: GesturePasswordProps = {
    width: 375,
    height: 300,
    background:"transparent",
    lineBackground:"red",
    lineColor:"green",
    onChange: (data: any) => console.log(data), // get gesture password
    onCustomizeDraw: onCustomizeDraw
  };

  return <GesturePassword {...config} />;
};
