import React, { useContext, useReducer } from "react";

import { AuthContext } from "../AuthContext";
import { actionTypes } from "../actions/actionTypes";
import { authReducer } from "../reducers";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({ type: actionTypes.LOGIN, payload: user });
  };

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro de un AuthProvider");
  }
  return context;
};
