import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial state

const InitState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create context :

export const GlobalContext = createContext(InitState);

// provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitState);
  // actions
  function deleteTrans(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTrans(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTrans,
        addTrans,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
