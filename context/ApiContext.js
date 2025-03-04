import { createContext, useContext } from "react";
import { ApiServices } from "../services/ApiServices";

const ApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
  const apiServices = new ApiServices();

  return (
    <ApiContext.Provider value={apiServices}>{children}</ApiContext.Provider>
  );
};

export const useApiServices = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error(
      "No ApiProvider context. useApiServices hook must be used inside this type of context",
    );
  }
  return context;
};
