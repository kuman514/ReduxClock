import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ClockTooltip.module.css';

function clockTooltipPosSelector(state) {
  return {
    hour: state.date.getHours(),
    minute: state.date.getMinutes(),
    second: state.date.getSeconds(),
    x: state.position[0],
    y: state.position[1],
    visible: state.position[2]
  };
}

export function ClockTooltip() {
  const curState = useSelector(clockTooltipPosSelector);

  const [dspHour, dspMin, dspSec] = [
    String(curState.hour).padStart(2, '0'),
    String(curState.minute).padStart(2, '0'),
    String(curState.second).padStart(2, '0')
  ];

  return (
    <div
      className={styles.clockTooltip + ` ${curState.visible ? '' : styles.hidden}`} style={{
        left: curState.x,
        bottom: window.innerHeight - curState.y
      }}
    >
      { `${dspHour}:${dspMin}:${dspSec}` }
    </div>
  );
};
