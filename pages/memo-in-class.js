import React, { Component } from "react";
import { withMemoMethod } from "../utils/common";

class MemoInClass extends Component {

  render() {
    const dep1 = Math.floor(Date.now() / 10000);
    const dep2 = Math.floor(Date.now() / 5000);
    const randNum = this.memo(() => {
      console.log("Run calculation", dep1);
      return Math.round(Math.random() * 10000000);
    }, [dep1]);
    const randNum2 = this.memo(() => {
      console.log("Run calculation 2", dep2);
      return Math.round(Math.random() * 10000000);
    }, [dep2]);
    console.log("TCL: MemoInClass -> render -> randNum", randNum, randNum2, this.memoHooks);

    return (
      <div>{JSON.stringify(this.props)}</div>
    );
  }
}

export default withMemoMethod(MemoInClass);