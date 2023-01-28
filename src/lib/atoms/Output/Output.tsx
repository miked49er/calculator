import * as React from 'react';
import styles from './Output.module.scss';

type Props = {
  value: number;
};

const {out} = styles
export const Output = ({value}: Props) => {
  return (
    <div className={out}>
      <span>{value}</span>
    </div>
  );
};
