import React from 'react';
import { Clock } from './features/clock/Clock';
import { ClockTooltip } from './features/clocktooltip/ClockTooltip';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();

  setInterval(() => {
    dispatch({type: 'DATE_UPDATE'});
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <ClockTooltip />
      </header>
    </div>
  );
}

export default App;
