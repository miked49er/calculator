import * as React from 'react';
import { Button } from '@mui/material';
import styles from './CircleButton.module.scss';

type Props = {
  text: string;
  className?: string;
};

const {btn} = styles;
export const CircleButton = ({className, text}: Props) => {
  return (
    <Button className={[btn, className].join(' ')} variant='contained'>{text}</Button>
  );
};
