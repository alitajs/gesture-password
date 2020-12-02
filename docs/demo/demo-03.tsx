import React from 'react';
import GesturePassword, { GesturePasswordProps } from '@alitajs/gesture-password-react';

export default () => {
  const config: GesturePasswordProps = {
    width: 375,
    height: 300,
    lineBackground: 'red',
    onChange: (data: any) => console.log(data) // get gesture password
  };

  return <GesturePassword {...config} />;
};
