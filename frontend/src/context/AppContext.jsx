import React, { createContext } from "react";
import { doctors } from "../assets/assets";

// Create context
export const AppContext = createContext();
const currencySymbol ='$'

// Create provider
const AppContextProvider = ({ children }) => {
  const value = {
    doctors,currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
