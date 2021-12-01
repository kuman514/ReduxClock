import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Clock.module.css';

function clockSelector(state) {
  return {
    hour: state.date.getHours(),
    minute: state.date.getMinutes(),
    second: state.date.getSeconds()
  };
}

export function ClockHourHand() {
  const curState = useSelector(clockSelector);

  const minuteDegree = curState.minute * 60 + curState.second;
  const hourDegree = (curState.hour % 12) * 3600 + minuteDegree;

  return (
    <div className={styles.clockHand} style={{
      WebkitTransform: `rotate(${360 * (hourDegree / 43200)}deg)`
    }}>
      <div className={styles.hourHandHead}>
      </div>
      <div className={styles.hourHandTail}>
      </div>
    </div>
  );
};
