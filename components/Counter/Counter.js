import React from "react";
import cl from "classnames";
import s from "./Counter.module.scss";

export default function Counter({ counterIncrease, counterDecrease, counter }) {
  return (
    <div>
      <button className={cl("btn", "btn-danger", s["control-btn"])} onClick={counterDecrease}>Decrease</button>
      {counter}
      <button className={cl("btn", "btn-success", s["control-btn"])} onClick={counterIncrease}>Increase</button>
    </div>
  );
}