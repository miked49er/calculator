import * as React from 'react';
import { Button } from '@mui/material';
import styles from './CircleButton.module.scss';

type Props = {
  text: string;
};

const {btn} = styles;
export const CircleButton = ({text}: Props) => {
  return (
    <Button className={btn} variant='contained'>{text}</Button>
  );
};
