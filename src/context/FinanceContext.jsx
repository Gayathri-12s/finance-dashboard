import { createContext, useReducer, useEffect, useState } from "react";
import { financeReducer, initialState } from "./financeReducer";
import { mockTransactions } from "../data/mockData";

// Create global context
export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  // Flag to ensure data is loaded before saving to localStorage
  const [loaded, setLoaded] = useState(false);

  // Load data (simulate API call using setTimeout)
  useEffect(() => {
    setTimeout(() => {
      const savedData = localStorage.getItem("transactions");

      // If data exists in localStorage → use it
      if (savedData && JSON.parse(savedData).length > 0) {
        dispatch({
          type: "SET_DATA",
          payload: JSON.parse(savedData),
        });
      } else {
        // Otherwise use mock data
        dispatch({
          type: "SET_DATA",
          payload: mockTransactions,
        });
      }

      setLoaded(true); // Allow saving after data is loaded
    }, 800); // simulate API delay
  }, []);

  //Save transactions whenever state changes 
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        "transactions",
        JSON.stringify(state.transactions)
      );
    }
  }, [state.transactions, loaded]);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
};