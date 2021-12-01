import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Clock.module.css';

function clockSelector(state) {
  return {
    second: state.date.getSeconds()
  };
}

export function ClockSecondHand() {
  const curState = useSelector(clockSelector);

  return (
    <div className={styles.clockHand} style={{
      WebkitTransform: `rotate(${360 * (curState.second / 60)}deg)`
    }}>
      <div className={styles.secondHandHead}>
      </div>
      <div className={styles.secondHandTail}>
      </div>
    </div>
  );
};
