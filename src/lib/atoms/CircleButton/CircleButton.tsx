import * as React from 'react';
import { Button } from '@mui/material';
import styles from './CircleButton.module.scss';
import { Op } from '../../pages/Calculator/Operations';

type Props = {
  text: string | Op;
  className?: string;
  click: () => void;
};

const {btn} = styles;
export const CircleButton = ({className, click, text}: Props) => {
  return (
    <Button
      className={[btn, className].join(' ')}
      onClick={click}
      variant='contained'
    >
      {text}
    </Button>
  );
};
