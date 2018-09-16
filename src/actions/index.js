import {INCREMENT, DECREMENT} from '../constants';

export const increment = ({id, name}) => {

  return {
    type: INCREMENT,
    name,
  }
};

export const decrement = ({id, name}) => {
  return {
    type: DECREMENT,
    name
  }
};
