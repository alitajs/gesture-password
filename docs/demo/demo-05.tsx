import React from 'react';
import GesturePassword, { GesturePasswordProps } from '@alitajs/gesture-password-react';

export default () => {
  const config: GesturePasswordProps = {
    width: 375,
    height: 300,
    hd: true,
    value: [1, 5, 9, 8, 6, 3, 2, 4, 7],
    disable: true,
    onChange: (data: any) => console.log(data) // get gesture password
  };

  return <GesturePassword {...config} />;
};
