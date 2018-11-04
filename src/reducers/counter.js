const counter = (state = 1, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state < 1 ? state : state + 1;
    case 'DECREMENT':
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
}

export default counter;
