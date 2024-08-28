import { SELECT_EMPLOYEE, APPLY_OFFER } from './actionTypes';

const initialState = {
  selectedEmployee: null,
  offer: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EMPLOYEE:
      return { ...state, selectedEmployee: action.payload };
    case APPLY_OFFER:
      return { ...state, offer: action.payload };
    default:
      return state;
  }
};

export default reducer;
