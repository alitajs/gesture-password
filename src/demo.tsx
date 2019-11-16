import React from 'react';
import ReactGesturePassword from './ReactGesturePassword';
export default () => {
  const config = {
    width: 375,
    height: 300,
    onChange: (data: any) => console.log(data),
  };
  return <ReactGesturePassword {...config} />;
};
