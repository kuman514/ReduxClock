import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Clock.module.css';

function clockSelector(state) {
  return {
    hour: state.date.getHours(),
    minute: state.date.getMinutes(),
    second: state.date.getSeconds()
  };
}

function onMouseHover(dispatchMousePos, event, hoverArea) {
  dispatchMousePos({
    type: 'POSITION_UPDATE',
    payload: [event.clientX, event.clientY, hoverArea]
  });
}

export function Clock() {
  const curState = useSelector(clockSelector);
  const dispatchMousePos = useDispatch();

  const minuteDegree = curState.minute * 60 + curState.second;
  const hourDegree = (curState.hour % 12) * 3600 + minuteDegree;

  return (
    <div
      className={styles.clock}
      onMouseEnter={(event) => {
        onMouseHover(dispatchMousePos, event, true);
      }}
      onMouseMove={(event) => {
        onMouseHover(dispatchMousePos, event, true);
      }}
      onMouseLeave={(event) => {
        onMouseHover(dispatchMousePos, event, false);
      }}
    >
      <div className={styles.clockHand} style={{
        WebkitTransform: `rotate(${360 * (hourDegree / 43200)}deg)`
      }}>
        <div className={styles.hourHandHead}>
        </div>
        <div className={styles.hourHandTail}>
        </div>
      </div>

      <div className={styles.clockHand} style={{
        WebkitTransform: `rotate(${360 * (minuteDegree / 3600)}deg)`
      }}>
        <div className={styles.minuteHandHead}>
        </div>
        <div className={styles.minuteHandTail}>
        </div>
      </div>

      <div className={styles.clockHand} style={{
        WebkitTransform: `rotate(${360 * (curState.second / 60)}deg)`
      }}>
        <div className={styles.secondHandHead}>
        </div>
        <div className={styles.secondHandTail}>
        </div>
      </div>

    </div>
  );
};
