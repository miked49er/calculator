import * as React from 'react';
import { useEffect, useState } from 'react';
import { ButtonPanel } from '../../organisms/ButtonPanel/ButtonPanel';
import { Output } from '../../atoms/Output/Output';
import styles from './Calculator.module.scss';
import { Op } from './Operations';

const {container} = styles;

export const Calculator = () => {
  const [output, setOutput] = useState('0');
  const [num, setNum] = useState('0');
  const [calc, setCalc] = useState(0);
  const [op, setOp] = useState(Op.NO_OP);

  const reset = () => {
    setOutput('0');
    setCalc(0);
    setNum('0');
    setOp(Op.NO_OP);
  }

  const numPress = (nextInt: string) => {
    if (op === Op.EQUALS) {
      reset();
    }

    let curNum = num.concat(nextInt)

    if (curNum.match(/^\./)) {
      curNum = `0${curNum}`;
    }
    else if (!curNum.match(/^0\./)) {
      curNum = curNum.replace(/^0/, '');
    }

    setNum(curNum);
  }

  const opSelect = (operation: Op) => {
    switch (op) {
      case Op.ADD:
        setCalc(calc + parseFloat(num));
        break;
      case Op.SUBTRACT:
        setCalc(calc - parseFloat(num));
        break;
      case Op.DIVIDE:
        setCalc(calc / parseFloat(num));
        break;
      case Op.MULTIPLY:
        setCalc(calc * parseFloat(num));
        break;
      case Op.EQUALS:
        break;
      default:
        setCalc(parseFloat(num));
    }
    setOp(operation);
    setNum('');
  }

  useEffect(() => {
    if (op === Op.EQUALS) {
      setOutput(calc.toString());
    } else {
      setOutput(op !== Op.NO_OP ? `${calc}${op}${num}` : num);
    }
  }, [calc, op, num]);

  return (
    <div className={container}>
      <Output value={output}/>
      <ButtonPanel
        onNumberPress={numPress}
        onReset={reset}
        onOpSelect={opSelect}
      />
    </div>
  );
};
