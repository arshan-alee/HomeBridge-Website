import React, { createContext, useContext, useState } from "react";

// Create the context
const StateContext = createContext();

// Create a provider component
export function StateProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Custom hook to access the context
export function useStateContext() {
  return useContext(StateContext);
}
