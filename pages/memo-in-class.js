/* eslint-disable no-console */
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

    return (
      <div>
        <div>{JSON.stringify(this.props)}</div>
        <div>randNum: {randNum} - {dep1}</div>
        <div>randNum2: {randNum2} - {dep2}</div>
      </div>
    );
  }
}

export default withMemoMethod(MemoInClass);