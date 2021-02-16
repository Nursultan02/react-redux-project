let initialState = { count: 100 };

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
    case 'SUB':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default countReducer;
