
const ADD = 'ADD';


const initialState = {};
const reducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD: {
      return action.payload;
    }
    default:
      return state;
  }
};


export default reducer;

export function login() {
  return {
    type: 'EMPTYSTATU'
  };
}

