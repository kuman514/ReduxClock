import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Clock.module.css';

function clockSelector(state) {
  return {
    minute: state.date.getMinutes(),
    second: state.date.getSeconds()
  };
}

export function ClockMinuteHand() {
  const curState = useSelector(clockSelector);

  const minuteDegree = curState.minute * 60 + curState.second;

  return (
    <div className={styles.clockHand} style={{
      WebkitTransform: `rotate(${360 * (minuteDegree / 3600)}deg)`
    }}>
      <div className={styles.minuteHandHead}>
      </div>
      <div className={styles.minuteHandTail}>
      </div>
    </div>
  );
};
