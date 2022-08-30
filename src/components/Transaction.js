import React, { useContext } from "react";
import Action from "./action";

import { GlobalContext, GlobalProvider } from "../context/GlobalState";
const Transaction = () => {
  const { transaction } = useContext(GlobalContext);
  //console.log(transaction);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((it) => (
          <Action key={it.id} transaction={it}></Action>
        ))}
      </ul>
    </>
  );
};

export default Transaction;
