import * as React from 'react';
import styles from './ButtonPanel.module.scss';
import { CircleButton } from '../../atoms/CircleButton/CircleButton';

type Props = {
  onOutput: () => void;
};

const {btnPanel, controls, ops, numbers, zero} = styles;
export const ButtonPanel = ({onOutput}: Props) => {
  const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  return (
    <div className={btnPanel}>
      <div className={controls}>
        <CircleButton text='AC'></CircleButton>
        <CircleButton text='+ / -'></CircleButton>
        <CircleButton text='%'></CircleButton>
      </div>
      <div className={ops}>
        <CircleButton text='÷'></CircleButton>
        <CircleButton text='×'></CircleButton>
        <CircleButton text='-'></CircleButton>
        <CircleButton text='+'></CircleButton>
        <CircleButton text='='></CircleButton>
      </div>
      <div className={numbers}>
        {nums.map(number => (
          <CircleButton className={number === 0 ? zero : undefined} text={number.toString()}></CircleButton>
        ))}
      </div>
    </div>
  );
};
