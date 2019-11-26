import React, { FC, useState } from 'react';
import GesturePassword from '@alitajs/gesture-password-react';

const Example: FC = () => {
  const [values, setValues] = useState<number[]>([]);

  const handleChange = (data: number[]) => {
    setValues(data);
  }

  console.log(values);

  return (
    <div>
      <GesturePassword width={375} height={300} onChange={handleChange} />
    </div>
  )
}

export default Example;
