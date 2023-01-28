import * as React from 'react';
import { ButtonPanel } from '../../organisms/ButtonPanel/ButtonPanel';
import { useState } from 'react';
import { Output } from '../../atoms/Output/Output';
import styles from './Calculator.module.scss';

const {container} = styles;

export const Calculator = () => {
  const [output, setOutput] = useState(0);
  return (
    <div className={container}>
      <Output value={output}/>
      <ButtonPanel
        onOutput={() => {
        }}
      />
    </div>
  );
};
