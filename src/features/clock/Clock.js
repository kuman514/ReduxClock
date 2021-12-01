import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Clock.module.css';
import { ClockHourHand } from './ClockHourHand';
import { ClockMinuteHand } from './ClockMinuteHand';
import { ClockSecondHand } from './ClockSecondHand';

function onMouseHover(dispatchMousePos, event, hoverArea) {
  dispatchMousePos({
    type: 'POSITION_UPDATE',
    payload: [event.clientX, event.clientY, hoverArea]
  });
}

export function Clock() {
  const dispatchMousePos = useDispatch();

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
      <ClockHourHand />
      <ClockMinuteHand />
      <ClockSecondHand />
    </div>
  );
};
