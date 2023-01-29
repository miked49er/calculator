import * as React from 'react';
import styles from './ButtonPanel.module.scss';
import { CircleButton } from '../../atoms/CircleButton/CircleButton';
import { Op } from '../../pages/Calculator/Operations';

type Props = {
  onNumberPress: (num: string) => void;
  onOpSelect: (op: Op) => void;
  onReset: () => void;
};

const {btnPanel, controls, ops, numbers, zero} = styles;
export const ButtonPanel = ({onNumberPress, onOpSelect, onReset}: Props) => {
  const nums: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  return (
    <div className={btnPanel}>
      <div className={controls}>
        <CircleButton
          text='AC'
          click={onReset}
        />
        <CircleButton
          text='+ / -'
          click={() => {
          }}
        />
        <CircleButton
          text='%'
          click={() => {
          }}
        />
      </div>
      <div className={ops}>
        <CircleButton
          text={Op.DIVIDE}
          click={() => onOpSelect(Op.DIVIDE)}
        />
        <CircleButton
          text={Op.MULTIPLY}
          click={() => onOpSelect(Op.MULTIPLY)}
        />
        <CircleButton
          text={Op.SUBTRACT}
          click={() => onOpSelect(Op.SUBTRACT)}
        />
        <CircleButton
          text={Op.ADD}
          click={() => onOpSelect(Op.ADD)}
        />
        <CircleButton
          text={Op.EQUALS}
          click={() => onOpSelect(Op.EQUALS)}
        />
      </div>
      <div className={numbers}>
        {nums.map(number => (
          <CircleButton
            className={number === '0' ? zero : undefined}
            text={number.toString()}
            click={() => onNumberPress(number)}
          />
        ))}
      </div>
    </div>
  );
};
