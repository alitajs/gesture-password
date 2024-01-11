import React from 'react';
import GesturePassword, { GesturePasswordProps } from '@alitajs/gesture-password-react';

export default () => {
  const [value,setValue] = React.useState([1, 5, 9, 8, 6, 3, 2, 4, 7])
  const config: GesturePasswordProps = {
    width: 375,
    height: 300,
    hd: true,
    value,
    // 不可编辑
    // disable: false,
    onChange: (data: any) => {
      setValue(data);
      console.log(data) // get gesture password{
    }
  };

  return <GesturePassword {...config} />;
};
