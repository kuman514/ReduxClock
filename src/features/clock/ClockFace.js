import React from 'react';
import styles from './Clock.module.css';

export function ClockFace() {
  return (
    <div className={styles.clockFace}>
        {
          Array.from(
            { length: 12 },
            (_, i) => i
          ).map((item) => {
            return (
              <div
                className={styles.clockFace}
                style={{
                  WebkitTransform: `rotate(${30 * item}deg)`
                }}
              >
                |
              </div>
            );
          })
        }
      </div>
  );
};
