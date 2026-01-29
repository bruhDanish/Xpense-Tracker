import { createContext } from "react";

// Initial state
export const initialState = {
    transactions: []
}

//Create context
export const GlobalContext = createContext(initialState);