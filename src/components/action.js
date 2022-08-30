import React, { useContext } from "react";
import { GlobalContext, GlobalProvider } from "../context/GlobalState";

const Action = ({ transaction: it }) => {
  const { deleteTrans } = useContext(GlobalContext);
  const sign = it.amount < 0 ? "-" : "+";
  const flag = it.amount < 0 ? "minus" : "plus";
  return (
    <li className={flag}>
      {it.text}{" "}
      <span>
        {sign}${Math.abs(it.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTrans(it.id)}>
        x
      </button>
    </li>
  );
};

export default Action;
