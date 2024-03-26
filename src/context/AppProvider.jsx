import { useReducer, createContext } from "react";

const DispatchContext = createContext();
const StateContext = createContext();
const AppProvider = ({ children }) => {
  const initialValue = {
    cartItems: [],
  };
  const reducer = (state, { type, payload }) => {
    // destructuring payload to img and title
  
    switch (type) {
      case "add_to_cart":
        return { ...state, cartItems: [...state.cartItems, payload ] };
      default:
        throw new Error(`Unknown action type ${type}`);
    }
  };
  let [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { AppProvider, DispatchContext, StateContext };
