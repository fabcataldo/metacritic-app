import { actionTypes } from "../actions/actionTypes";

export const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isAuthenticated: true, user: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};
