import React from 'react';
import ReactGesturePassword from './ReactGesturePassword';
export default () => {
  const config = {
    width: 375,
    height: 300,
    rowPont: 4,
  };
  return <ReactGesturePassword {...config} />;
};
