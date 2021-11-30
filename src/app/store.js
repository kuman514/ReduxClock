import { createStore } from 'redux';

const initState = {
  date: new Date(),
  position: [0, 0, false]
};

export const store = createStore((state = initState, action) => {
  switch (action.type) {
    case 'DATE_UPDATE':
      return {
        ...state,
        date: new Date()
      };
    case 'POSITION_UPDATE':
      return {
        ...state,
        position: action.payload
      };
    default:
      return state;
  }
});
